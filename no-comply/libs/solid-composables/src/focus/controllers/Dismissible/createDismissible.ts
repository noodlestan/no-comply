import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';
import { onCleanup } from 'solid-js';

import { createPressOutside } from '../PressOutside';

import { $DISMISSIBLE } from './constants';
import type { DismissibleAPI, DismissibleProps } from './types';

export const createDismissible = (props: DismissibleProps): DismissibleAPI => {
	const [locals, expose, compose] = createExposable($DISMISSIBLE, props);

	let rootEl: HTMLElement | undefined;

	const setDismissibleRef = (el: HTMLElement) => {
		rootEl = el;
	};

	const pressOutsideProps = computedProps({
		onPressOutside: () => locals.onDismiss,
		exclude: () => locals.exclude,
	});
	const { $root: $pressOutsideRoot } = compose(createPressOutside(pressOutsideProps));

	const onKeyDown = (ev: KeyboardEvent) => {
		if (ev.key === 'Escape') {
			locals.onDismiss();
		}
	};

	const handleFocusIn = () => {
		if (!rootEl) {
			return;
		}
		const active = document.activeElement as HTMLElement | null;
		if (active && rootEl.contains(active)) {
			return;
		}
		if (locals.exclude?.().some(el => el && el.contains(document.activeElement))) {
			return;
		}
		locals.onDismiss();
	};

	document.addEventListener('focusin', handleFocusIn);

	onCleanup(() => {
		document.removeEventListener('focusin', handleFocusIn);
	});
	const $root = {
		ref: setDismissibleRef,
		onKeyDown,
	};

	return exposeAPI(expose, '$root', {
		$root: combineProps($pressOutsideRoot, $root),
	});
};

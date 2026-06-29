import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { attributeBoolean, computedProps } from '@no-comply/solid-primitives';
import { createSignal } from 'solid-js';

import { $FOCUS_RING } from './constants';
import type { FocusRingAPI, FocusRingProps } from './types';

export const createFocusRing = (props: FocusRingProps = {}): FocusRingAPI => {
	const [locals, expose] = createExposable($FOCUS_RING, props);

	const [hadFocus, setHadFocus] = createSignal(false);
	const [isActive, setIsActive] = createSignal(false);

	const onFocus = () => {
		setIsActive(true);
	};

	const onBlur = () => {
		setIsActive(false);
	};

	const onKeyDown = (ev: KeyboardEvent) => {
		if (locals.passive) {
			return;
		}
		if (ev.target !== ev.currentTarget) {
			return;
		}
		if (ev.key === 'Enter' || ev.key === 'Space') {
			setIsActive(true);
			setHadFocus(true);
			setTimeout(() => {
				setIsActive(false);
				setTimeout(() => {
					setHadFocus(false);
				}, 75);
			}, 75);
		}
	};

	const $static = {
		onKeyDown,
	};

	const $root = computedProps($static, {
		'data-had-focus': () => attributeBoolean(hadFocus()),
		'data-is-focused': () => attributeBoolean(isActive()),
	});

	const $focusTarget = {
		onFocus,
		onBlur,
		classList: { foo: true },
	};

	return exposeAPI(expose, '$root', {
		$root,
		$focusTarget,
	});
};

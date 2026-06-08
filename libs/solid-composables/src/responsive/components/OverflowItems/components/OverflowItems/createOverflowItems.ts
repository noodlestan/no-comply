import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { type ObjectWithId, computedProps, staticClassList } from '@no-comply/solid-primitives';
import { createResizeObserver } from '@solid-primitives/resize-observer';
import { createEffect, onMount } from 'solid-js';

import { createOverflowItemsContext } from '../../private';

import styles from './OverflowItems.module.scss';
import { $OVERFLOW_ITEMS } from './constants';
import type { OverflowItemsAPI, OverflowItemsProps } from './types';

export const createOverflowItems = <T extends ObjectWithId = ObjectWithId>(
	props: OverflowItemsProps<T>,
): OverflowItemsAPI => {
	const [locals, expose, compose] = createExposable($OVERFLOW_ITEMS, props);

	const contextValue = compose(createOverflowItemsContext(locals));
	const [context, ownerAPI] = contextValue;

	let timeout: number | null = null;
	let rootEl: HTMLElement;
	let measureEl: HTMLElement;

	const setElementRef = (el: HTMLElement) => {
		rootEl = el;
	};

	const setMeasureRef = (el: HTMLElement) => {
		measureEl = el;
	};

	const runTest = () => {
		const { scrollWidth, clientWidth, scrollHeight, clientHeight } = measureEl;
		const isOverflowing = scrollWidth > clientWidth || scrollHeight > clientHeight;

		if (!isOverflowing) {
			ownerAPI.finishTest();
			return;
		}

		if (ownerAPI.nextTest()) {
			timeout = window.setTimeout(runTest, 100);
		}
	};

	const startTest = () => {
		if (timeout != null) {
			clearTimeout(timeout);
		}
		ownerAPI.startTest();
		timeout = window.setTimeout(runTest, 200);
	};

	createEffect(() => {
		if (!(locals.items && locals.currentItemId)) {
			return;
		}
		startTest();
	});

	onMount(() => {
		createResizeObserver(rootEl, () => {
			startTest();
		});
	});

	const $static = {
		ref: setElementRef,
		classList: staticClassList(styles, 'OverflowItems'),
	};
	const $root = computedProps($static, {
		'data-responsive-items-is-reflowing': () => (context.isReflowing() ? '' : undefined),
	});

	const $measure = {
		ref: setMeasureRef,
		inert: true,
		classList: staticClassList(styles, 'measure'),
	};

	const $render = {
		'data-responsive-items-container': '',
	};

	return exposeAPI(expose, '$root', {
		$root,
		$measure,
		$render,
		context,
		contextValue,
	});
};

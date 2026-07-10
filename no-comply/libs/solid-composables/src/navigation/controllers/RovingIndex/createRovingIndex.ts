import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { createEffect, createMemo, createSignal } from 'solid-js';

import { $ROVING_INDEX } from './constants';
import type { RovingIndexAPI, RovingIndexProps } from './types';

export const createRovingIndex = (props: RovingIndexProps): RovingIndexAPI => {
	const [locals, expose] = createExposable($ROVING_INDEX, props);

	const length = createMemo(() => locals.items().length);
	const [index, setIndex] = createSignal(locals.initialIndex ?? 0);

	createEffect(() => {
		const len = length();
		const current = index();
		if (len === 0) {
			if (current !== 0) setIndex(0);
		} else if (current >= len) {
			setIndex(len - 1);
		} else if (current < 0) {
			setIndex(0);
		}
	});

	const clamp = (i: number): number => {
		const len = length();
		if (len === 0) return 0;
		if (locals.loop) {
			return ((i % len) + len) % len;
		}
		return Math.max(0, Math.min(len - 1, i));
	};

	const focusNext = () => {
		setIndex(i => clamp(i + 1));
	};

	const focusPrev = () => {
		setIndex(i => clamp(i - 1));
	};

	const focusFirst = () => {
		setIndex(0);
	};

	const focusLast = () => {
		setIndex(length() - 1);
	};

	const focusIndex = (i: number) => {
		setIndex(clamp(i));
	};

	return exposeAPI(expose, undefined, {
		index,
		focusNext,
		focusPrev,
		focusFirst,
		focusLast,
		focusIndex,
	});
};

import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import type { PressEvent } from '@no-comply/solid-primitives';
import { combineProps } from '@no-comply/solid-primitives';

import { createPressable } from '../Pressable';

import { $EXTENDED_PRESSABLE } from './constant';
import type { ExtendedPressableAPI, ExtendedPressableProps } from './types';

type ExtendedPressableState = {
	pressStartTime: number;
	pointerActive: boolean;
	keyActive: boolean;
	lastPressTime: number;
};

const DOUBLE_PRESS_THRESHOLD_DEFAULT = 300;
const LONG_PRESS_THRESHOLD_DEFAULT = 500;

export const createExtendedPressable = (props: ExtendedPressableProps): ExtendedPressableAPI => {
	const [locals, expose, compose] = createExposable($EXTENDED_PRESSABLE, props);

	const onPress = (ev: PressEvent) => {
		locals.onPress?.(ev);
		if (ev instanceof MouseEvent) {
			if (ev.altKey) {
				locals.onAltPress?.(ev);
			}
			if (ev.shiftKey) {
				locals.onShiftPress?.(ev);
			}
		}
	};
	const pressableProps = combineProps({ onPress }, locals);
	const { $root: $pressableRoot } = compose(createPressable(pressableProps));

	const state: ExtendedPressableState = {
		pressStartTime: 0,
		pointerActive: false,
		keyActive: false,
		lastPressTime: 0,
	};

	const maybeDoublePress = (ev: PressEvent): void => {
		const threshold = locals.doublePressThreshold ?? DOUBLE_PRESS_THRESHOLD_DEFAULT;
		const durationMs = performance.now() - state.lastPressTime;
		if (durationMs <= threshold) {
			locals.onDoublePress?.(ev);
		}
	};

	const maybeLongPress = (ev: PressEvent): void => {
		const threshold = locals.longPressThreshold ?? LONG_PRESS_THRESHOLD_DEFAULT;
		const durationMs = performance.now() - state.pressStartTime;
		if (durationMs >= threshold) {
			locals.onLongPress?.({ ...ev, durationMs });
		}
	};

	const onKeyDown = (ev: KeyboardEvent) => {
		if (locals.disabled || state.keyActive) {
			return;
		}
		if (ev.key === 'Enter' || ev.key === ' ') {
			state.keyActive = true;
			maybeDoublePress(ev);
			state.pressStartTime = performance.now();
		}
	};

	const onKeyUp = (ev: KeyboardEvent) => {
		if (!state.keyActive) {
			return;
		}
		state.keyActive = false;
		if (ev.key === 'Enter' || ev.key === ' ') {
			maybeLongPress(ev);
		}
	};

	const onBlur = () => {
		state.keyActive = false;
		state.pointerActive = false;
	};

	const onPointerDown = (ev: PointerEvent) => {
		if (locals.disabled) {
			return;
		}
		state.pointerActive = true;
		maybeDoublePress(ev);
		state.pressStartTime = performance.now();
	};

	const onPointerUp = (ev: PointerEvent) => {
		if (!state.pointerActive) {
			return;
		}
		state.pointerActive = false;
		maybeLongPress(ev);
	};

	const onPointerCancel = () => {
		state.pointerActive = false;
	};

	const onPointerLeave = () => {
		state.pointerActive = false;
	};

	const $static = {
		onKeyDown,
		onKeyUp,
		onBlur,
		onPointerDown,
		onPointerUp,
		onPointerCancel,
		onPointerLeave,
	};

	return exposeAPI(expose, '$root', {
		$root: combineProps($pressableRoot, $static),
	});
};

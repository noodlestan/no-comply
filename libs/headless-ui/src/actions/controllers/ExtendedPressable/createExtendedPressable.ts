import type { PressEvent } from '@noodlestan/context-ui-primitives';
import { mergeProps } from '@noodlestan/context-ui-primitives';
import { splitProps } from 'solid-js';

import { createPressable } from '../Pressable';

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
    const [locals, others] = splitProps(props, [
        'onPress',
        'doublePressThreshold',
        'onDoublePress',
        'longPressThreshold',
        'onLongPress',
        'onAltPress',
        'onShiftPress',
    ]);

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

    const onKeyDown = (ev: KeyboardEvent) => {
        if (others.disabled || state.keyActive) {
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
        if (others.disabled) {
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

    const extendedHandlers = {
        onKeyDown,
        onKeyUp,
        onBlur,
        onPointerDown,
        onPointerUp,
        onPointerCancel,
        onPointerLeave,
    };

    const pressableProps = mergeProps({ onPress }, others);
    const pressable = createPressable(pressableProps);

    return {
        elProps: mergeProps(pressable.elProps, extendedHandlers),
    };
};

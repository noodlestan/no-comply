import type { ExtendedPressEventHandlers } from '@noodlestan/context-ui-primitives';

import type { PressableAPI, PressableElementProps, PressableProps } from '../Pressable';

export type ExtendedPressableProps = PressableProps &
    ExtendedPressEventHandlers & {
        doublePressThreshold?: number;
        longPressThreshold?: number;
    };

export type ExtendedPressableElementProps = PressableElementProps & {
    onKeyUp: (ev: KeyboardEvent) => void;
    onBlur: (ev: FocusEvent) => void;
    onPointerDown: (ev: PointerEvent) => void;
    onPointerUp: (ev: PointerEvent) => void;
    onPointerCancel: (ev: PointerEvent) => void;
    onPointerLeave: (ev: PointerEvent) => void;
};

export type ExtendedPressableAPI = PressableAPI;

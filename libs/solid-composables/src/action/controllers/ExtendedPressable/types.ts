import type { ExtendedPressEventHandlers } from '@no-comply/solid-primitives';

import type { PressableAPI, PressableProps } from '../Pressable';

export type ExtendedPressableProps = PressableProps &
    ExtendedPressEventHandlers & {
        doublePressThreshold?: number;
        longPressThreshold?: number;
    };

export type ExtendedPressableAPI = {
    $root: PressableAPI['$root'] & {
        onKeyDown: (ev: KeyboardEvent) => void;
        onKeyUp: (ev: KeyboardEvent) => void;
        onBlur: (ev: FocusEvent) => void;
        onPointerDown: (ev: PointerEvent) => void;
        onPointerUp: (ev: PointerEvent) => void;
        onPointerCancel: (ev: PointerEvent) => void;
        onPointerLeave: (ev: PointerEvent) => void;
    };
};

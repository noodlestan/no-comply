import { createAriaPressable } from '@noodlestan/context-ui-aria';
import { mergeProps } from '@noodlestan/context-ui-primitives';

import type { PressableAPI, PressableProps } from './types';

export const createPressable = (props: PressableProps): PressableAPI => {
    const { $root: $ariaPressableRoot } = createAriaPressable(props);

    const onClick = (ev: MouseEvent) => {
        if (props.disabled) {
            ev.preventDefault();
            return;
        }
        props.onPress?.(ev);
    };

    const onKeyDown = (ev: KeyboardEvent) => {
        if (props.disabled) {
            return;
        }
        if (ev.key === 'Enter' || ev.key === ' ') {
            ev.stopImmediatePropagation();
            props.onPress?.(ev);
        }
    };

    const $localRoot = {
        onClick,
        onKeyDown,
    };

    return {
        $root: mergeProps($ariaPressableRoot, $localRoot),
    };
};

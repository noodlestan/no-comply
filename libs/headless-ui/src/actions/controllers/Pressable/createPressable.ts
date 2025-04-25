import { createAriaPressable } from '@noodlestan/context-ui-aria';
import { mergeProps } from '@noodlestan/context-ui-primitives';

import type { PressableAPI, PressableProps } from './types';

export const createPressable = (props: PressableProps): PressableAPI => {
    const onClick = (ev: MouseEvent) => {
        if (props.disabled) {
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
            ev.preventDefault();
            props.onPress?.(ev);
        }
    };

    const { elProps: ariaProps } = createAriaPressable(props);

    const handlers = {
        onClick,
        onKeyDown,
    };

    const elProps = mergeProps(ariaProps, handlers);

    return {
        elProps,
    };
};

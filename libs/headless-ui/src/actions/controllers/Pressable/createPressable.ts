import { createComputedProps } from '@noodlestan/context-ui-types';

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

    const handlers = {
        onClick,
        onKeyDown,
    };

    const component = () => props.component ?? 'button';

    const role = () => props.role ?? (props.component === 'button' ? undefined : 'button');

    const tabIndex = () => (props.disabled ? undefined : (props.tabIndex ?? 0));

    const disabled = () => (props.component === 'button' ? props.disabled : undefined);

    const elProps = createComputedProps(handlers, {
        component,
        role,
        tabIndex,
        disabled,
        'aria-disabled': () => (props.disabled && !disabled() ? true : undefined),
        'data-disabled': () => (props.disabled ? '' : undefined),
    });

    return {
        elProps,
    };
};

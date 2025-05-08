import { createComputedProps } from '@noodlestan/context-ui-primitives';

import type { AriaPressableAPI, AriaPressableProps } from './types';

export const createAriaPressable = (props: AriaPressableProps): AriaPressableAPI => {
    const component = () => props.tag ?? 'button';
    const role = () => props.role ?? (component() === 'button' ? undefined : 'button');
    const type = () => (component() === 'button' ? props.type : undefined);
    const tabIndex = () => (props.disabled ? undefined : (props.tabIndex ?? 0));
    const disabled = () => (component() === 'button' ? props.disabled : undefined);

    const $root = createComputedProps({
        component,
        role,
        type,
        tabIndex,
        disabled,
        'aria-disabled': () => (props.disabled && !disabled() ? true : undefined),
        'data-disabled': () => (props.disabled ? '' : undefined),
    });

    return {
        $root,
    };
};

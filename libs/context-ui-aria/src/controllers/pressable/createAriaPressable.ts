import { createComputedProps } from '@noodlestan/context-ui-primitives';

import type { AriaPressableAPI, AriaPressableProps } from './types';

export const createAriaPressable = (props: AriaPressableProps): AriaPressableAPI => {
    const component = () => props.tag ?? 'button';
    const role = () => props.role ?? (props.tag === 'button' ? undefined : 'button');
    const type = () => (props.tag === 'button' ? props.type : undefined);
    const tabIndex = () => (props.disabled ? undefined : (props.tabIndex ?? 0));
    const disabled = () => (props.tag === 'button' ? props.disabled : undefined);

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

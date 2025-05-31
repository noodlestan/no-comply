import { computedProps } from '@no-comply/solid-primitives';

import type { PressableRoleName } from '../../role';

import type { AriaGenericPressableAPI, AriaPressableAPI, AriaPressableProps } from './types';

export function createAriaPressable(props: AriaPressableProps): AriaPressableAPI;
export function createAriaPressable<T extends PressableRoleName = PressableRoleName>(
    props: AriaPressableProps,
    staticRole: T,
): AriaPressableAPI<T>;
export function createAriaPressable(
    props: AriaPressableProps,
    staticRole?: PressableRoleName | undefined,
): AriaGenericPressableAPI {
    const component = () => props.tag ?? 'button';

    const role = () => {
        if (staticRole) {
            return staticRole;
        }
        if (props.role) {
            return props.role;
        }
        const isNativeButton = component() === 'button';
        const isLink = component() === 'a';

        if (isNativeButton || isLink) {
            return undefined;
        }

        return 'button';
    };

    const type = () => (component() === 'button' ? props.type : undefined);
    const tabIndex = () => (props.disabled ? undefined : (props.tabIndex ?? 0));
    const disabled = () => (component() === 'button' ? props.disabled : undefined);

    const $root = computedProps({
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
}

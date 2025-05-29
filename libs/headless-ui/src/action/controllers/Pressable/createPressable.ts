import { type PressableRoleName, createAriaPressable } from '@noodlestan/context-ui-aria';
import { mergeProps } from '@noodlestan/context-ui-primitives';

import type { GenericPressableAPI, PressableAPI, PressableProps } from './types';

export function createPressable(props: PressableProps): PressableAPI;
export function createPressable<T extends PressableRoleName = PressableRoleName>(
    props: PressableProps,
    staticRole: T,
): PressableAPI<T>;
export function createPressable(
    props: PressableProps,
    staticRole?: PressableRoleName | undefined,
): GenericPressableAPI {
    const { $root: $ariaPressableRoot } = staticRole
        ? createAriaPressable(props, staticRole)
        : createAriaPressable(props);

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
}

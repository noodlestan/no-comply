import { type PressableRoleName, createAriaPressable } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { $PRESSABLE } from './constants';
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
    const [locals, expose] = createExposable($PRESSABLE, props);

    const { $root: $pressableRoot } = staticRole
        ? createAriaPressable(locals, staticRole)
        : createAriaPressable(locals);

    const onClick = (ev: MouseEvent) => {
        if (locals.disabled) {
            ev.preventDefault();
            return;
        }
        locals.onPress?.(ev);
    };

    const onKeyDown = (ev: KeyboardEvent) => {
        if (locals.disabled) {
            return;
        }
        if (ev.key === 'Enter' || ev.key === ' ') {
            ev.stopImmediatePropagation();
            locals.onPress?.(ev);
        }
    };

    const $root = {
        onClick,
        onKeyDown,
    };

    return exposeAPI(expose, '$root', {
        $root: combineProps($pressableRoot, $root),
    });
}

import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createAriaLabelled } from '../label';

import type { AriaMenuItemAPI, AriaMenuItemProps } from './types';

export function createAriaMenuItem(props: AriaMenuItemProps): AriaMenuItemAPI {
    const { $root: $labelledRoot, ...rest } = createAriaLabelled(props);

    const $localRoot = createComputedProps({
        role: () => props.role ?? 'menuitem',
    });

    return {
        ...rest,
        $root: mergeProps($labelledRoot, $localRoot),
    };
}

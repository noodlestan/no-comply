import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';

import { createAriaLabelled } from '../label';

import type { AriaMenuAPI, AriaMenuProps } from './types';

export function createAriaMenu(props: AriaMenuProps): AriaMenuAPI {
    const { $root: $labelledRoot, ...rest } = createAriaLabelled(props);

    const $localRoot = createComputedProps({
        role: () => props.role ?? 'menu',
    });

    return {
        ...rest,
        $root: mergeProps($labelledRoot, $localRoot),
    };
}

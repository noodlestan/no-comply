import { computedProps, mergeProps } from '@no-comply/solid-primitives';

import { createAriaLabelled } from '../label';

import type { AriaMenuAPI, AriaMenuProps } from './types';

export function createAriaMenu(props: AriaMenuProps): AriaMenuAPI {
    const { $root: $labelledRoot, ...rest } = createAriaLabelled(props);

    const $root = computedProps({
        role: () => props.role ?? 'menu',
    });

    return {
        ...rest,
        $root: mergeProps($labelledRoot, $root),
    };
}

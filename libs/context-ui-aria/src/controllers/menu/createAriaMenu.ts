import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import { createAriaLabelled } from '../label';

import type { AriaMenuAPI, AriaMenuProps } from './types';

export function createAriaMenu(props: AriaMenuProps): AriaMenuAPI {
    const { $root: $regionRoot, ...rest } = createAriaLabelled(props);

    const $static = {
        component: 'div' as const,
    };
    const $localRoot = createComputedProps($static, {
        role: () => props.role ?? 'menu',
    });

    return {
        ...rest,
        $root: mergeProps($regionRoot, $localRoot),
    };
}

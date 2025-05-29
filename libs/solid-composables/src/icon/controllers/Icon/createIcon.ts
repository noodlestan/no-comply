import { createComputedProps } from '@no-comply/solid-primitives';

import type { IconAPI, IconProps } from './types';

export const createIcon = (props: IconProps): IconAPI => {
    const $static = {
        component: 'span' as const,
    };
    const $localRoot = createComputedProps($static, {
        children: () => props.icon({}),
    });

    return {
        $root: $localRoot,
    };
};

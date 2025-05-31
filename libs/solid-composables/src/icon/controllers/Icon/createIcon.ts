import { computedProps } from '@no-comply/solid-primitives';

import type { IconAPI, IconProps } from './types';

export const createIcon = (props: IconProps): IconAPI => {
    const $static = {
        component: 'span' as const,
    };
    const $root = computedProps($static, {
        children: () => props.icon({}),
    });

    return {
        $root,
    };
};

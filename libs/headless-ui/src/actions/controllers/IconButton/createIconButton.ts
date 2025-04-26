import { createComputedProps } from '@noodlestan/context-ui-primitives';

import type { IconButtonAPI, IconButtonProps } from './types';

export const createIconButton = (props: IconButtonProps): IconButtonAPI => {
    const $static = {
        'data-icon-button': '' as const,
    };
    const $localRoot = createComputedProps($static, {
        label: () => props.label,
    });

    const iconProps = createComputedProps({
        icon: () => props.icon,
    });

    return {
        $root: $localRoot,
        iconProps,
    };
};

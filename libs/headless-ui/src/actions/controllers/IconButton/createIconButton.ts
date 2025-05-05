import { createComputedProps } from '@noodlestan/context-ui-primitives';

import type { IconButtonAPI, IconButtonProps } from './types';

export const createIconButton = (props: IconButtonProps): IconButtonAPI => {
    const $static = {
        'data-icon-button': '' as const,
    };
    const $localRoot = createComputedProps($static, {
        'aria-label': () => props.label,
    });

    const staticIconProps = {
        'aria-hidden': true,
    };
    const iconProps = createComputedProps(staticIconProps, {
        icon: () => props.icon,
    });

    return {
        $root: $localRoot,
        iconProps,
    };
};

import { createComputedProps } from '@noodlestan/context-ui-primitives';

import type { IconActionAPI, IconActionProps } from './types';

export const createIconAction = (props: IconActionProps): IconActionAPI => {
    const $localRoot = createComputedProps({
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

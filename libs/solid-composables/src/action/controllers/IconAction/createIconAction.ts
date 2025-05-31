import { computedProps } from '@no-comply/solid-primitives';

import type { IconActionAPI, IconActionProps } from './types';

export const createIconAction = (props: IconActionProps): IconActionAPI => {
    const $root = computedProps({
        'aria-label': () => props.label,
    });

    const staticIconProps = {
        'aria-hidden': true,
    };
    const iconProps = computedProps(staticIconProps, {
        icon: () => props.icon,
    });

    return {
        $root,
        iconProps,
    };
};

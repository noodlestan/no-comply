import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import { createToggleAction } from '../ToggleAction';

import type { ExpandActionAPI, ExpandActionProps } from './types';

export const createExpandAction = (props: ExpandActionProps): ExpandActionAPI => {
    const toggleActionProps = createComputedProps({
        value: () => props.expanded,
        labels: () => ({
            on: props.labels.expanded,
            off: props.labels.collapsed,
        }),
        icons: () => ({
            on: props.icons.expanded,
            off: props.icons.collapsed,
        }),
    });
    const { iconActionProps: toggleActionIconProps } = createToggleAction(toggleActionProps);

    const iconActionLocalProps = createComputedProps({
        'aria-expanded': () => props.expanded,
        'aria-controls': () => props.controls,
    });

    return {
        iconActionProps: mergeProps(toggleActionIconProps, iconActionLocalProps),
    };
};

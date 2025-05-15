import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import { createToggleButton } from '../ToggleButton';

import type { ExpandButtonAPI, ExpandButtonProps } from './types';

export const createExpandButton = (props: ExpandButtonProps): ExpandButtonAPI => {
    const toggleButtonProps = createComputedProps({
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
    const { iconButtonProps: toggleButtonIconProps } = createToggleButton(toggleButtonProps);

    const iconButtonLocalProps = createComputedProps({
        'aria-expanded': () => props.expanded,
        'aria-controls': () => props.controls,
    });

    return {
        iconButtonProps: mergeProps(toggleButtonIconProps, iconButtonLocalProps),
    };
};

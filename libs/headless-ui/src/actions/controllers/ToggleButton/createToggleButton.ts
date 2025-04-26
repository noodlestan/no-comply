import { i, l } from '@noodlestan/context-ui';
import { createComputedProps } from '@noodlestan/context-ui-primitives';

import type { ToggleButtonAPI, ToggleButtonProps } from './types';

export const createToggleButton = (props: ToggleButtonProps): ToggleButtonAPI => {
    const iconButtonProps = createComputedProps({
        label: () => l(props.value ? props.labels.on : props.labels.off),
        icon: () => i(props.value ? props.icons.on : props.icons.off),
    });

    return {
        iconButtonProps,
    };
};

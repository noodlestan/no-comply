import { i, l } from '@noodlestan/context-ui';
import { createComputedProps } from '@noodlestan/context-ui-primitives';

import type { ToggleActionAPI, ToggleActionProps } from './types';

export const createToggleAction = (props: ToggleActionProps): ToggleActionAPI => {
    const iconActionProps = createComputedProps({
        label: () => l(props.value ? props.labels.on : props.labels.off),
        icon: () => i(props.value ? props.icons.on : props.icons.off),
    });

    return {
        iconActionProps,
    };
};

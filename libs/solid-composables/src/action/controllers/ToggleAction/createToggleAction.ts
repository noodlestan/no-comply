import { i, l } from '@no-comply/solid-contexts';
import { computedProps } from '@no-comply/solid-primitives';

import type { ToggleActionAPI, ToggleActionProps } from './types';

export const createToggleAction = (props: ToggleActionProps): ToggleActionAPI => {
    const iconActionProps = computedProps({
        label: () => l(props.value ? props.labels.on : props.labels.off),
        icon: () => i(props.value ? props.icons.on : props.icons.off),
    });

    return {
        iconActionProps,
    };
};

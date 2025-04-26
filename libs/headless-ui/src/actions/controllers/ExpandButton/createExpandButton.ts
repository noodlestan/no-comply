import { i, l } from '@noodlestan/context-ui';
import { createComputedProps } from '@noodlestan/context-ui-primitives';

import type { ExpandButtonAPI, ExpandButtonProps } from './types';

export const createExpandButton = (props: ExpandButtonProps): ExpandButtonAPI => {
    const iconButtonProps = createComputedProps({
        label: () => l(props.expanded ? props.labels.expanded : props.labels.collapsed),
        icon: () => i(props.expanded ? props.icons.expanded : props.icons.collapsed),
    });

    return {
        iconButtonProps,
    };
};

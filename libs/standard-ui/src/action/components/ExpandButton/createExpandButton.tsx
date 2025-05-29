import {
    type ExpandActionIcons,
    type ExpandActionLabels,
    createExpandAction,
} from '@no-comply/solid-composables';
import { createIconValue } from '@no-comply/solid-contexts';
import { createComputedProps, mergeProps } from '@no-comply/solid-primitives';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-solid';

import type { ActionVariant } from '../../types';

import type { ExpandButtonAPI, ExpandButtonProps } from './types';

const LABELS: ExpandActionLabels = {
    expanded: 'Collapse',
    collapsed: 'Expand',
};

const ICONS: ExpandActionIcons = {
    expanded: createIconValue(ChevronDownIcon),
    collapsed: createIconValue(ChevronUpIcon),
};

export const createExpandButton = (props: ExpandButtonProps): ExpandButtonAPI => {
    const expandButtonProps = createComputedProps({
        controls: () => props.controls,
        expanded: () => props.expanded,
        labels: () => Object.assign({}, LABELS, props.labels),
        icons: () => Object.assign({}, ICONS, props.icons),
    });
    const { iconActionProps: expandActionIconActionProps } = createExpandAction(expandButtonProps);

    const staticIconButtonProps = { variant: 'plain' as ActionVariant };

    return {
        iconButtonProps: mergeProps(expandActionIconActionProps, props, staticIconButtonProps),
    };
};

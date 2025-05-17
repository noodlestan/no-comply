import { createIconValue } from '@noodlestan/context-ui';
import { createComputedProps, mergeProps, pickProps } from '@noodlestan/context-ui-primitives';
import {
    type ExpandActionIcons,
    type ExpandActionLabels,
    createExpandAction,
} from '@noodlestan/headless-ui';
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
    const iconButtonProps = pickProps(props, ['size', 'onPress', 'disabled']);

    return {
        iconButtonProps: mergeProps(
            expandActionIconActionProps,
            staticIconButtonProps,
            iconButtonProps,
        ),
    };
};

import { createIconValue } from '@noodlestan/context-ui';
import { createComputedProps, mergeProps, pickProps } from '@noodlestan/context-ui-primitives';
import {
    type ExpandButtonIcons,
    type ExpandButtonLabels,
    createExpandButton as createHeadlesExpandButton,
} from '@noodlestan/headless-ui';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-solid';

import type { ExpandButtonAPI, ExpandButtonProps } from './types';

const LABELS: ExpandButtonLabels = {
    expanded: 'Collapse',
    collapsed: 'Expand',
};

const ICONS: ExpandButtonIcons = {
    expanded: createIconValue(ChevronDownIcon),
    collapsed: createIconValue(ChevronUpIcon),
};

export const createExpandButton = (props: ExpandButtonProps): ExpandButtonAPI => {
    const iconButtonProps = pickProps(props, ['variant', 'size', 'onPress']);
    const expandButtonProps = createComputedProps({
        controls: () => props.controls,
        expanded: () => props.expanded,
        labels: () => Object.assign({}, LABELS, props.labels),
        icons: () => Object.assign({}, ICONS, props.icons),
    });
    const { iconButtonProps: expandButtonIconButtonProps } =
        createHeadlesExpandButton(expandButtonProps);

    return {
        iconButtonProps: mergeProps(iconButtonProps, expandButtonIconButtonProps),
    };
};

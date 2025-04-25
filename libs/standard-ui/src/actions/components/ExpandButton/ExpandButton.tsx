import { createIconValue, i, l } from '@noodlestan/context-ui';
import {
    createClassList,
    createComputedProps,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-solid';
import { type Component, splitProps } from 'solid-js';

import { IconButton } from '../IconButton';

import styles from './ExpandButton.module.css';
import type { ExpandButtonIcons, ExpandButtonLabels, ExpandButtonProps } from './types';

const LABELS: ExpandButtonLabels = {
    expand: 'Expand',
    collapse: 'Collapse',
};

const ICONS: ExpandButtonIcons = {
    expanded: createIconValue(ChevronDownIcon),
    collapsed: createIconValue(ChevronUpIcon),
};

export const ExpandButton: Component<ExpandButtonProps> = props => {
    const [locals, others] = splitProps(props, ['expanded', 'round', 'labels', 'icons']);

    const labels = () => Object.assign({}, LABELS, locals.labels);
    const label = () => l(locals.expanded ? labels().collapse : labels().expand);

    const icons = () => Object.assign({}, ICONS, locals.icons);
    const icon = () => i(locals.expanded ? icons().expanded : icons().collapsed);

    const classList = createClassList(styles, () => ({
        ExpandButton: true,
        [`ExpandButton-is-round`]: Boolean(locals.round),
    }));

    const expandButonProps = createComputedProps({
        label,
        icon,
        classList,
    });

    const iconButtonProps = mergeProps(others, expandButonProps);

    return <IconButton {...iconButtonProps} variant="plain" />;
};

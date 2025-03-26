import { ChevronDownIcon, ChevronUpIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import type { IconValue } from '../../icons';
import { createIconValue, i } from '../../icons';
import { type LabelValue, l } from '../../labels';
import type { ButtonProps } from '../Button';
import { IconButton } from '../IconButton';

import './ExpandButton.css';

export type ExpandButtonSize = 'xs' | 's' | 'm';

export type ExpandButtonLabels = {
    expand: LabelValue;
    collapse: LabelValue;
};

export type ExpandButtonIcons = {
    expanded: IconValue;
    collapsed: IconValue;
};

export type ExpandButtonProps = Pick<ButtonProps, 'onClick' | 'onBlur' | 'classList' | 'ref'> & {
    size?: ExpandButtonSize;
    isExpanded: boolean;
    rounded?: boolean;
    labels?: Partial<ExpandButtonLabels>;
    icons?: Partial<ExpandButtonIcons>;
};

const defaultProps: Pick<ExpandButtonProps, 'size'> = {
    size: 's',
};

const LABELS: ExpandButtonLabels = {
    expand: 'Expand',
    collapse: 'Collapse',
};

const ICONS: ExpandButtonIcons = {
    expanded: createIconValue(ChevronDownIcon),
    collapsed: createIconValue(ChevronUpIcon),
};

export const ExpandButton: Component<ExpandButtonProps> = props => {
    const size = () => props.size || defaultProps.size;

    const labels = () => Object.assign({}, LABELS, props.labels);
    const label = () => l(props.isExpanded ? labels().collapse : labels().expand);

    const icons = () => Object.assign({}, ICONS, props.icons);
    const icon = () => (props.isExpanded ? i(icons().expanded) : i(icons().collapsed));

    const classList = () => ({
        ...props.classList,
        ExpandButton: true,
        [`ExpandButton-is-expanded`]: props.isExpanded,
        [`ExpandButton-is-chevron`]: Boolean(props.rounded),
        [`ExpandButton-size-${size()}`]: true,
    });

    return (
        <IconButton
            {...props}
            classList={classList()}
            size={size()}
            icon={icon()}
            variant="plain"
            label={label()}
        />
    );
};

import { ChevronDownIcon, ChevronUpIcon } from 'lucide-solid';
import { Component } from 'solid-js';

import { IconComponent, IconSize } from '../../icons';
import { ButtonProps } from '../Button';
import { IconButton } from '../IconButton';

import './ExpandButton.css';

type ExpandButtonSize = 'xs' | 's' | 'm';

export type ExpandButtonProps = Pick<ButtonProps, 'onClick' | 'onBlur' | 'classList'> & {
    size: ExpandButtonSize;
    isExpanded: boolean;
    rounded?: boolean;
    expanded?: IconComponent;
    collapsed?: IconComponent;
    label?: string;
};

const defaultProps: Pick<ExpandButtonProps, 'size'> = {
    size: 's',
};

export const MAP_SIZE_TO_ICON_SIZE: Record<ExpandButtonSize, IconSize> = {
    xs: 'xs',
    s: 's',
    m: 'm',
};

const iconSizeFromSize = (size: ExpandButtonSize): IconSize => MAP_SIZE_TO_ICON_SIZE[size];

export const ExpandButton: Component<ExpandButtonProps> = props => {
    const size = () => props.size || defaultProps.size;

    const icon = (): IconComponent =>
        props.isExpanded ? props.expanded || ChevronDownIcon : props.collapsed || ChevronUpIcon;

    const label = () => {
        if (props.label) {
            return props.label;
        } else {
            return props.isExpanded ? 'Collapse' : 'Expand';
        }
    };

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
            size={iconSizeFromSize(size())}
            icon={icon()}
            variant="plain"
            label={label()}
        />
    );
};

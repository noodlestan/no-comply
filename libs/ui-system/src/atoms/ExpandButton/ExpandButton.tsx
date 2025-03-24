import { ChevronDownIcon, ChevronUpIcon } from 'lucide-solid';
import { type Component } from 'solid-js';

import type { IconComponent } from '../../icons';
import type { ButtonProps } from '../Button';
import { IconButton } from '../IconButton';

import './ExpandButton.css';

type ExpandButtonSize = 'xs' | 's' | 'm';

export type ExpandButtonProps = Pick<ButtonProps, 'onClick' | 'onBlur' | 'classList' | 'ref'> & {
    size?: ExpandButtonSize;
    isExpanded: boolean;
    rounded?: boolean;
    expanded?: IconComponent;
    collapsed?: IconComponent;
    label?: string;
};

const defaultProps: Pick<ExpandButtonProps, 'size'> = {
    size: 's',
};

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
            size={size()}
            icon={icon()}
            variant="plain"
            label={label()}
        />
    );
};

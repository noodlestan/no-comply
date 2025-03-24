import type { Component, JSX } from 'solid-js';

import type { IconComponent } from '../../icons';
import { Button, type ButtonProps } from '../Button';

import './IconButton.css';

export type IconButtonProps = Omit<ButtonProps, 'length' | 'children'> & {
    icon: IconComponent | JSX.Element;
};

const defaultProps: Pick<IconButtonProps, 'size'> = {
    size: 's',
};

export const IconButton: Component<IconButtonProps> = props => {
    const size = () => props.size || defaultProps.size;
    const icon = () => (typeof props.icon === 'function' ? props.icon({}) : props.icon);

    const classList = () => ({
        ...props.classList,
        IconButton: true,
        [`IconButton-size-${size()}`]: true,
    });

    return (
        <Button {...props} classList={classList()}>
            <span class="IconButton--icon">{icon()}</span>
        </Button>
    );
};

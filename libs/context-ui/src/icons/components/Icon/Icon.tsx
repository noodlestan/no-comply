import { type Component } from 'solid-js';

import type { IconProps } from './types';

import './Icon.css';

const defaultProps: Pick<IconProps, 'size'> = {
    size: 's',
};

export const Icon: Component<IconProps> = props => {
    const size = () => props.size || defaultProps.size;
    const icon = () => (typeof props.icon === 'function' ? props.icon({}) : props.icon);

    const classList = () => ({
        ...props.classList,
        Icon: true,
        [`Icon-size-${size()}`]: true,
    });

    return (
        <span aria-hidden classList={classList()}>
            {icon()}
        </span>
    );
};

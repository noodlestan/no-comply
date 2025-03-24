import type { Component, JSX } from 'solid-js';

import type { ClassList } from '../../../dom';

import './FieldsetLabel.css';

export type FieldsetLabelSize = 'xs' | 's' | 'm' | 'l';

export type FieldsetLabelProps = {
    size?: FieldsetLabelSize;
    classList?: ClassList;
    children?: JSX.Element;
};

const defaultProps: Pick<FieldsetLabelProps, 'size'> = {
    size: 's',
};

export const FieldsetLabel: Component<FieldsetLabelProps> = props => {
    const size = () => props.size || defaultProps.size;

    const classList = () => ({
        ...props.classList,
        FieldsetLabel: true,
        [`FieldsetLabel-size-${size()}`]: true,
    });

    return <label classList={classList()}>{props.children}</label>;
};

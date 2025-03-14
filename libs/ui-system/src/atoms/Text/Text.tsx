import { Component, JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import './Text.css';

export type TextSize = 'xs' | 's' | 'm' | 'l';

export type TextColor =
    | 'auto'
    | 'primary'
    | 'focused'
    | 'modified'
    | 'selected'
    | 'muted'
    | 'neutral'
    | 'good'
    | 'meh'
    | 'bad';

export type TextProps = {
    size?: TextSize;
    color?: TextColor;
    tag?: string;
    nowrap?: boolean;
    classList?: { [key: string]: boolean };
    children?: JSX.Element;
};

const defaultProps: Pick<TextProps, 'color' | 'size' | 'tag'> = {
    size: 's',
    color: 'auto',
    tag: 'p',
};

export const Text: Component<TextProps> = props => {
    const size = () => props.size ?? defaultProps.size;
    const color = () => props.color || defaultProps.color;
    const tag = () => props.tag || defaultProps.tag;

    const classList = () => ({
        ...props.classList,
        Text: true,
        [`Text-size-${size()}`]: true,
        [`Text-color-${color()}`]: true,
        [`Text-nowrap`]: props.nowrap,
    });

    return (
        <Dynamic component={tag()} classList={classList()}>
            {props.children}
        </Dynamic>
    );
};

import { Component } from 'solid-js';

import './Divider.css';

export type DividerVariant = 'base' | 'strong' | 'muted' | 'alt';
export type DividerLength = 's' | 'm' | 'l' | 'full';

export type DividerProps = {
    variant?: DividerVariant;
    length?: number | DividerLength;
    classList?: { [key: string]: boolean };
};

const defaultProps: Pick<DividerProps, 'variant' | 'length'> = {
    variant: 'base',
    length: 'full',
};

const makeLength = (length: number | DividerLength): string => {
    if (typeof length === 'number') {
        return `${length}em`;
    }
    if (length === 'full') {
        return '100%';
    }
    return `var(--divider-length-${length})`;
};

const makeStyle = (length?: DividerLength | number) =>
    length ? { '--divider-length': makeLength(length) } : {};

export const Divider: Component<DividerProps> = props => {
    const variant = () => props.variant || defaultProps.variant;
    const length = () => props.length || defaultProps.length;
    const style = () => makeStyle(length());

    const classList = () => ({
        ...props.classList,
        Divider: true,
        [`Divider-variant-${variant()}`]: true,
        [`Divider-length-${length()}`]: true,
    });
    return <hr classList={classList()} style={style()} />;
};

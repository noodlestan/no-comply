import { Component, JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import type {
    FlexAlign,
    FlexDirection,
    FlexGap,
    FlexJustify,
    FlexOverflow,
    FlexPadding,
} from './types';

import './Flex.css';

export type FlexProps = {
    tag?: string;
    direction?: FlexDirection;
    align?: FlexAlign;
    justify?: FlexJustify;
    gap?: FlexGap;
    padding?: FlexPadding;
    flex?: number;
    overflow?: FlexOverflow;
    inline?: boolean;
    wrap?: boolean;
    shrink?: boolean | number;
    truncate?: boolean;
    full?: boolean;
    role?: JSX.HTMLAttributes<HTMLDivElement>['role'];
    ref?: (el: Element) => void;
    classList?: { [key: string]: boolean };
    children?: JSX.Element;
};

const defaultProps: Pick<FlexProps, 'tag' | 'direction' | 'align' | 'justify' | 'gap' | 'padding'> =
    {
        tag: 'div',
        direction: 'column',
        align: 'stretch',
        justify: 'start',
        gap: 'none',
        padding: 'none',
    };

export const Flex: Component<FlexProps> = props => {
    const tag = () => props.tag || defaultProps.tag;
    const direction = () => props.direction ?? defaultProps.direction;
    const align = () => props.align ?? defaultProps.align;
    const justify = () => props.justify ?? defaultProps.justify;
    const gap = () => props.gap ?? defaultProps.gap;
    const padding = () => props.padding ?? defaultProps.padding;

    const elementProps = (): JSX.HTMLAttributes<HTMLDivElement> => {
        if (props.role) {
            return {
                ref: props.ref,
                role: props.role,
            };
        }
        return { ref: props.ref };
    };

    const classList = () => ({
        ...props.classList,
        Flex: true,
        'Flex-inline': props.inline,
        'Flex-full': props.full,
        'Flex-wrap': props.wrap,
        'Flex-shrink': Boolean(props.shrink),
        'Flex-no-shrink': props.shrink === 0,
        'Flex-truncate': props.truncate,
        'Flex-flex': props.flex !== undefined,
        [`Flex-direction-${direction()}`]: true,
        [`Flex-align-${align()}`]: true,
        [`Flex-justify-${justify()}`]: true,
        [`Flex-gap-${gap()}`]: true,
        [`Flex-padding-${padding()}`]: true,
        [`Flex-overflow-${props.overflow}`]:
            props.overflow !== undefined && props.overflow !== 'initial',
    });

    const style = () => {
        if (props.flex !== undefined) {
            return {
                '--flex-flex': props.flex,
            };
        }
    };

    return (
        <Dynamic component={tag()} classList={classList()} style={style()} {...elementProps()}>
            {props.children}
        </Dynamic>
    );
};

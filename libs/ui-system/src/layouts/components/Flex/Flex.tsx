import { type Component, splitProps } from 'solid-js';

import { createClassList } from '../../../dom';
import { Layout, type LayoutProps } from '../Layout';

import styles from './Flex.module.css';
import type { FlexAlign, FlexDirection, FlexGap, FlexJustify } from './types';

const defaultProps: Pick<FlexProps, 'tag' | 'direction' | 'align' | 'justify'> = {
    tag: 'div',
    direction: 'column',
    align: 'stretch',
    justify: 'start',
};

export type FlexProps = LayoutProps & {
    direction?: FlexDirection;
    align?: FlexAlign;
    justify?: FlexJustify;
    gap?: FlexGap;
    shrink?: boolean | number;
    inline?: boolean;
    wrap?: boolean;
    flex?: number;
};

export const Flex: Component<FlexProps> = props => {
    const [locals, elementProps] = splitProps(props, [
        'direction',
        'align',
        'justify',
        'gap',
        'shrink',
        'wrap',
        'inline',
        'flex',
        'classList',
        'padding',
    ]);

    const direction = () => locals.direction ?? defaultProps.direction;
    const align = () => locals.align ?? defaultProps.align;
    const justify = () => locals.justify ?? defaultProps.justify;

    const classList = () =>
        createClassList(
            styles,
            {
                Flex: true,
                [`Flex-direction-${direction()}`]: true,
                [`Flex-align-${align()}`]: true,
                [`Flex-justify-${justify()}`]: true,
                [`Flex-gap-${locals.gap}`]: Boolean(locals.gap),
                [`Flex-shrink`]: locals.shrink === true,
                [`Flex-no-shrink`]: locals.shrink === false,
                [`Flex-wrap`]: Boolean(locals.wrap),
                [`Flex-inline`]: Boolean(locals.inline),
                [`Flex-flex`]: locals.flex !== undefined,
            },
            locals.classList,
        );

    return <Layout {...elementProps} classList={classList()} />;
};

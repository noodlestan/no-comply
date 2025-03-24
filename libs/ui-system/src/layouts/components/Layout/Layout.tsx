import { type Component, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { createClassList } from '../../../dom';
import { type TagProps } from '../Tag';

import styles from './Layout.module.css';
import type { LayoutOverflow, LayoutPadding, LayoutStretch } from './types';

export type LayoutProps = TagProps & {
    padding?: LayoutPadding;
    stretch?: LayoutStretch;
    overflow?: LayoutOverflow;
};

const defaultProps: Pick<LayoutProps, 'tag'> = {
    tag: 'div',
};

export const Layout: Component<LayoutProps> = props => {
    const [locals, elementProps] = splitProps(props, [
        'tag',
        'padding',
        'stretch',
        'overflow',
        'classList',
    ]);

    const tag = () => locals.tag ?? defaultProps.tag;

    const classList = () =>
        createClassList(
            styles,
            {
                Layout: true,
                [`Layout-padding-${locals.padding}`]: Boolean(locals.padding),
                [`Layout-stretch-${locals.stretch}`]: Boolean(locals.stretch),
                [`Layout-overflow-${locals.overflow}`]: Boolean(locals.overflow),
            },
            locals.classList,
        );

    return <Dynamic {...elementProps} component={tag()} classList={classList()} />;
};

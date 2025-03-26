import { type Component, type JSX, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { type ClassList, type Styles, createClassList } from '../../../dom';

import styles from './Tag.module.css';

export type TagProps = Omit<JSX.HTMLAttributes<HTMLElement>, 'style'> & {
    tag?: keyof JSX.IntrinsicElements;
    ref?: HTMLElement | ((el: HTMLElement) => void) | undefined;
    classList?: ClassList;
    style?: Styles;
    children?: JSX.Element;
};

const defaultProps: Pick<TagProps, 'tag'> = {
    tag: 'div',
};

export const Tag: Component<TagProps> = (props: TagProps) => {
    const [locals, elementProps] = splitProps(props, ['tag', 'classList']);

    const tag = () => locals.tag ?? defaultProps.tag;
    const classList = createClassList(
        styles,
        () => ['Tag'],
        () => locals.classList,
    );

    return <Dynamic {...elementProps} component={tag()} classList={classList()} />;
};

import { Component, JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { FocusableProps, FocusableTag } from '../Focusable';

export type FocusableHoverProps = {
    tag?: FocusableTag;
    children?: JSX.Element;
};

const defaultProps: Pick<FocusableProps, 'tag'> = {
    tag: 'div',
};

export const FocusableHover: Component<FocusableHoverProps> = props => {
    const tag = () => props.tag || defaultProps.tag;

    const classList = () => ({
        FocusableHover: true,
    });

    return (
        <Dynamic component={tag()} classList={classList()} data-ui-focusable-hover>
            {props.children}
        </Dynamic>
    );
};

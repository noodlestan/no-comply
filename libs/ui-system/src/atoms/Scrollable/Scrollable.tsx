import { Component, JSX } from 'solid-js';

import './Scrollable.css';

export type ScrollableProps = {
    y?: boolean;
    z?: boolean;
    classList?: { [key: string]: boolean };
    children: JSX.Element;
};

export const Scrollable: Component<ScrollableProps> = props => {
    const classList = () => ({
        ...props.classList,
        Scrollable: true,
        [`Scrollable-y`]: props.y,
        [`Scrollable-x`]: props.z,
    });

    return <div classList={classList()}>{props.children}</div>;
};

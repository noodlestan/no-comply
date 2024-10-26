import { Component, JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { contextClassList, contextVars } from '../../helpers';

export type ClassNamesElementProps = JSX.HTMLAttributes<HTMLDivElement> & {
    tag?: string;
    classList?: { [key: string]: boolean };
    children?: JSX.Element;
};
const defaultProps: Pick<ClassNamesElementProps, 'tag'> = {
    tag: 'div',
};

export const ClassNamesElement: Component<ClassNamesElementProps> = props => {
    const tag = () => props.tag || defaultProps.tag;

    const classList = () => ({
        ...props.classList,
        ...contextClassList(),
    });

    const style = () => contextVars();

    return (
        <Dynamic component={tag()} classList={classList()} style={style()}>
            {props.children}
        </Dynamic>
    );
};

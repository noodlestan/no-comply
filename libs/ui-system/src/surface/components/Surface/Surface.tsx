import { Component, JSX, splitProps } from 'solid-js';

import { SurfaceProvider, contextClassList, contextVars } from '../../../root';

import { SurfaceUnstyled, SurfaceUnstyledProps } from './SurfaceUnstyled';

import './Surface.css';

export type SurfaceProps = SurfaceUnstyledProps & {
    variant: string;
    disabled?: boolean;
    debug?: boolean;
    classList?: { [key: string]: boolean };
    children?: JSX.Element;
};

const SurfaceElement: Component<SurfaceProps> = props => {
    const [locals, childProps] = splitProps(props, ['variant']);

    const classList = () => ({
        ...props.classList,
        ...contextClassList(),
        Surface: true,
        'Surface-debug': !!props.debug,
    });

    const style = () => ({
        ...contextVars(),
    });

    return (
        <SurfaceUnstyled
            {...childProps}
            data-nui-surface={locals.variant}
            classList={classList()}
            style={style()}
        >
            {props.children}
        </SurfaceUnstyled>
    );
};

export const Surface: Component<SurfaceProps> = props => {
    return (
        <SurfaceProvider surface={props.variant} shallow>
            <SurfaceElement {...props} />
        </SurfaceProvider>
    );
};

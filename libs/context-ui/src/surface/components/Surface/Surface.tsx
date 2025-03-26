import { type Component, splitProps } from 'solid-js';

import { ContextProvider, createContextNode, ctx } from '../../../context';
import { type SurfaceContext, createSurfaceContext } from '../../context';

import { SurfaceUnstyled, type SurfaceUnstyledProps } from './SurfaceUnstyled';

import './Surface.css';

export type SurfaceProps = SurfaceUnstyledProps & {
    variant: string;
    debug?: boolean;
};

export type SurfaceElementProps = SurfaceProps & {
    context: SurfaceContext;
};

const SurfaceElement: Component<SurfaceElementProps> = props => {
    const [locals, childProps] = splitProps(props, ['variant', 'style']);

    const classList = () => ({
        ...props.classList,
        Surface: true,
        'Surface-debug': !!props.debug,
    });

    const style = () => ({
        ...locals.style,
        ...props.context.contextVars(),
    });

    const data = () => props.context.contextData();

    return (
        <SurfaceUnstyled {...childProps} {...data()} classList={classList()} style={style()}>
            {props.children}
        </SurfaceUnstyled>
    );
};

export const Surface: Component<SurfaceProps> = props => {
    // eslint-disable-next-line solid/reactivity
    const contexts = () => [ctx(node => createSurfaceContext(props.variant, node))];
    const context = createContextNode(contexts);
    const surface = context.node.valueFor<SurfaceContext>('surface');

    return (
        <ContextProvider value={context}>
            <SurfaceElement {...props} context={surface} />
        </ContextProvider>
    );
};

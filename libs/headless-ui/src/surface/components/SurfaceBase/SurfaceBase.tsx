import {
    ContextProvider,
    type SurfaceContext,
    createContextNode,
    createSurfaceContext,
    ctx,
} from '@noodlestan/context-ui';
import { type Component, splitProps } from 'solid-js';

import { SurfaceBaseTag } from './SurfaceBaseTag';
import type { SurfaceBaseProps } from './types';

export const SurfaceBase: Component<SurfaceBaseProps> = props => {
    const [locals, others] = splitProps(props, ['variant']);
    // eslint-disable-next-line solid/reactivity
    const contexts = () => [ctx(node => createSurfaceContext(locals.variant, node))];
    const context = createContextNode(contexts);
    const surface = () => context.node.valueFor<SurfaceContext>('surface');

    return (
        <ContextProvider value={context}>
            <SurfaceBaseTag {...others} context={surface()} />
        </ContextProvider>
    );
};

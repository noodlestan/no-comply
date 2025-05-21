import { SurfaceContextProvider } from '@noodlestan/context-ui';
import {
    type ClosedTagProps,
    type MaybeRenderProp,
    mergeProps,
    resolveRenderProp,
} from '@noodlestan/context-ui-primitives';
import { type Component, children, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { type SurfaceAPI } from '../../controllers';

import { SURFACE_BASE_PROPS } from './constants';
import { createSurfaceBase } from './createSurfaceBase';
import type { SurfaceBaseProps } from './types';

type ChildrenProps = {
    surface: SurfaceAPI;
};

type Props = ClosedTagProps &
    SurfaceBaseProps & {
        children: MaybeRenderProp<ChildrenProps>;
    };

export const SurfaceBase: Component<Props> = props => {
    const [locals, $others] = splitProps(props, [...SURFACE_BASE_PROPS, 'children']);

    const surface = createSurfaceBase(locals);
    const { $root, contextValue } = surface;
    const $ = mergeProps($others, $root);
    const c = children(() => resolveRenderProp(locals.children, { surface }));

    return (
        <SurfaceContextProvider context={contextValue}>
            <Dynamic {...$}>{c()}</Dynamic>
        </SurfaceContextProvider>
    );
};

import { SurfaceContextProvider } from '@no-comply/solid-contexts';
import {
    type ClosedTagProps,
    type MaybeRenderProp,
    combineProps,
    resolveRenderProp,
} from '@no-comply/solid-primitives';
import { type Component, children, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { SURFACE_PROPS } from './constants';
import { createSurface } from './createSurface';
import type { SurfaceAPI, SurfaceProps } from './types';

type ChildrenProps = {
    surface: SurfaceAPI;
};

type Props = ClosedTagProps &
    SurfaceProps & {
        children: MaybeRenderProp<ChildrenProps>;
    };

export const Surface: Component<Props> = props => {
    const [locals, $others] = splitProps(props, [...SURFACE_PROPS, 'children']);

    const surface = createSurface(locals);
    const { $root, contextValue } = surface;
    const $ = combineProps($root, $others);
    const c = children(() => resolveRenderProp(locals.children, { surface }));

    return (
        <SurfaceContextProvider context={contextValue}>
            <Dynamic {...$}>{c()}</Dynamic>
        </SurfaceContextProvider>
    );
};

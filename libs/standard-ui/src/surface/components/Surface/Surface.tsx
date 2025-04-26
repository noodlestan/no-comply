import { type MaybeRenderProp, mergeProps } from '@noodlestan/context-ui-primitives';
import { type ClosedTagProps, type SurfaceAPI, SurfaceBase } from '@noodlestan/headless-ui';
import { type Component, splitProps } from 'solid-js';

import { SURFACE_PROPS } from './constants';
import { createSurface } from './createSurface';
import type { SurfaceProps } from './types';

type ChildrenProps = {
    surface: SurfaceAPI;
};

type Props = ClosedTagProps &
    SurfaceProps & {
        children: MaybeRenderProp<ChildrenProps>;
    };

export const Surface: Component<Props> = props => {
    const [locals, $others] = splitProps(props, SURFACE_PROPS);

    const { surfaceProps } = createSurface(locals);
    const p = mergeProps(surfaceProps, $others);

    return <SurfaceBase {...p} />;
};

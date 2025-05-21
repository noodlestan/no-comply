import {
    type ClosedTagProps,
    type MaybeRenderProp,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { type SurfaceAPI, SurfaceBase } from '@noodlestan/headless-ui';
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
    const [locals, $others] = splitProps(props, [...SURFACE_PROPS]);

    const surface = createSurface(locals);
    const { surfaceProps } = surface;
    const $ = mergeProps(surfaceProps, $others);

    return <SurfaceBase {...$} />;
};

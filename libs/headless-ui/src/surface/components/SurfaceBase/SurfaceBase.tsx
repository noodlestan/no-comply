import { SurfaceContextProvider } from '@noodlestan/context-ui';
import { mergeProps } from '@noodlestan/context-ui-primitives';
import { type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { type SurfaceAPI, createSurface } from '../../controllers';
import { createSurfaceMixin } from '../../mixins';

import type { SurfaceBaseProps } from './types';

export const SurfaceBase: Component<SurfaceBaseProps> = props => {
    const surface = createSurface(props);

    const { elProps: mixinProps } = createSurfaceMixin();
    const elProps = mergeProps(props, mixinProps, surface.elProps);

    const children = (surface: SurfaceAPI) => {
        if (typeof props.children === 'function') {
            return props.children(surface);
        }
        return props.children;
    };

    return (
        <SurfaceContextProvider context={surface.contextValue}>
            <Dynamic {...elProps}>{children(surface)}</Dynamic>
        </SurfaceContextProvider>
    );
};

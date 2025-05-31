import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createSurface } from '../../controllers';
import { createSurfaceMixin } from '../../mixins';

import { $SURFACE_BASE } from './constants';
import type { SurfaceBaseAPI, SurfaceBaseProps } from './types';

export const createSurfaceBase = (props: SurfaceBaseProps): SurfaceBaseAPI => {
    const [locals, expose, compose] = createExposable($SURFACE_BASE, props);

    const { $root: $surfaceRoot, ...rest } = compose(createSurface(locals));
    const { $root: $focusableMixinRoot } = compose(createSurfaceMixin());

    return exposeAPI(expose, '$root', {
        ...rest,
        $root: combineProps($surfaceRoot, $focusableMixinRoot),
    });
};

import { combineProps } from '@no-comply/solid-primitives';

import { createSurface } from '../../controllers';
import { createSurfaceMixin } from '../../mixins';

import type { SurfaceBaseAPI, SurfaceBaseProps } from './types';

export const createSurfaceBase = (props: SurfaceBaseProps): SurfaceBaseAPI => {
    const { $root, ...rest } = createSurface(props);
    const { $root: $focusableMixinRoot } = createSurfaceMixin();

    return {
        ...rest,
        $root: combineProps($root, $focusableMixinRoot),
    };
};

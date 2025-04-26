import { mergeProps } from '@noodlestan/context-ui-primitives';

import { createSurface } from '../../controllers';
import { createSurfaceMixin } from '../../mixins';

import type { SurfaceBaseAPI, SurfaceBaseProps } from './types';

export const createSurfaceBase = (props: SurfaceBaseProps): SurfaceBaseAPI => {
    const { $root, ...rest } = createSurface(props);
    const { $root: $focusableMixinRoot } = createSurfaceMixin();

    return {
        $root: mergeProps($root, $focusableMixinRoot),
        ...rest,
    };
};

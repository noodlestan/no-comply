import { definePropKeys } from '@no-comply/solid-primitives';

import { LAYOUT_MIXIN_PROPS } from '../../../layout';

import type { SurfaceMixinProps } from './types';

export const $SURFACE_MIXIN = 'mixin:standard:surface';

export const SURFACE_MIXIN_PROPS = definePropKeys<SurfaceMixinProps>()([...LAYOUT_MIXIN_PROPS]);

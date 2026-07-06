import { SURFACE_PROPS as HEADLESS_SURFACE_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { SURFACE_MIXIN_PROPS } from '../../mixins';

import type { SurfaceProps } from './types';

export const $SURFACE = 'component:standard:surface';

export const SURFACE_PROPS = definePropKeys<SurfaceProps>()([
	...HEADLESS_SURFACE_PROPS,
	...SURFACE_MIXIN_PROPS,
]);

import { EXPOSED_DATA_PROPS } from '@no-comply/solid-contexts';
import { definePropKeys } from '@no-comply/solid-primitives';

import { SURFACE_PROPS } from '../../controllers';

import type { SurfaceBaseProps } from './types';

export const $SURFACE_BASE = 'component:composable:surface-base';

export const SURFACE_BASE_PROPS = definePropKeys<SurfaceBaseProps>()([
    ...EXPOSED_DATA_PROPS,
    ...SURFACE_PROPS,
]);

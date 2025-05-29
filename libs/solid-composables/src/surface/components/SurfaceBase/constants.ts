import { definePropKeys } from '@no-comply/solid-primitives';

import { SURFACE_PROPS } from '../../controllers';

import type { SurfaceBaseProps } from './types';

export const SURFACE_BASE_PROPS = definePropKeys<SurfaceBaseProps>()(SURFACE_PROPS);

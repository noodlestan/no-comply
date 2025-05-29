import { ARIA_REGION_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { SurfaceProps } from './types';

export const SURFACE_PROPS = definePropKeys<SurfaceProps>()([
    ...ARIA_REGION_PROPS,
    'tag',
    'variant',
    'interactive',
    'disabled',
    'debug',
]);

import { ARIA_REGION_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { SurfaceProps } from './types';

export const SURFACE_PROPS = definePropKeys<SurfaceProps>()([
    ...ARIA_REGION_PROPS,
    'tag',
    'variant',
    'interactive',
    'disabled',
    'debug',
]);

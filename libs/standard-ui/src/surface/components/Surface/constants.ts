import { SURFACE_BASE_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { LAYOUT_PROPS } from '../../../layout';

import type { SurfaceProps } from './types';

export const SURFACE_PROPS = definePropKeys<SurfaceProps>()([
    ...SURFACE_BASE_PROPS,
    ...LAYOUT_PROPS,
    'variant',
]);

import { definePropKeys } from '@noodlestan/context-ui-primitives';
import { SURFACE_BASE_PROPS } from '@noodlestan/headless-ui';

import { LAYOUT_PROPS } from '../../../layout';

import type { SurfaceProps } from './types';

export const SURFACE_PROPS = definePropKeys<SurfaceProps>()([
    ...SURFACE_BASE_PROPS,
    ...LAYOUT_PROPS,
    'variant',
]);

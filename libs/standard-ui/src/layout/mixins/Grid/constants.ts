import { GRID_MIXIN_PROPS as HEADLESS_GRID_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { GridMixinProps } from './types';

export const $GRID_MIXIN = 'mixin:standard:flex';

export const GRID_MIXIN_PROPS = definePropKeys<GridMixinProps>()(HEADLESS_GRID_MIXIN_PROPS);

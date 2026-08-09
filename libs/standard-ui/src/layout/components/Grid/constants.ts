import { definePropKeys } from '@no-comply/solid-primitives';

import { GRID_MIXIN_PROPS } from '../../mixins';
import { LAYOUT_PROPS } from '../Layout';

import type { GridProps } from './types';

export const $GRID = 'component:standard:flex';

export const GRID_PROPS = definePropKeys<GridProps>()([...LAYOUT_PROPS, ...GRID_MIXIN_PROPS]);

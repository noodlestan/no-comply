import { definePropKeys } from '@no-comply/solid-primitives';

import { LAYOUT_GAP_PROPS } from '../../constants';

import type { GridMixinProps } from './types';

export const $GRID_MIXIN = 'mixin:composable:grid';

export const GRID_MIXIN_PROPS = definePropKeys<GridMixinProps>()([
    ...LAYOUT_GAP_PROPS,
    'columns',
    'rows',
    'areas',
    'flow',
    'justifyItems',
    'alignItems',
    'justifyContent',
    'alignContent',
    'autoRows',
    'autoColumns',
    'inline',
]);

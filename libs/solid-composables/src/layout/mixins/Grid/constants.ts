import { definePropKeys } from '@no-comply/solid-primitives';

import type { GridMixinProps } from './types';

export const $GRID_MIXIN = 'mixin:composable:grid';

export const GRID_MIXIN_PROPS = definePropKeys<GridMixinProps>()([
    'columns',
    'rows',
    'areas',
    'gap',
    'rowGap',
    'columnGap',
    'flow',
    'justifyItems',
    'alignItems',
    'justifyContent',
    'alignContent',
    'autoRows',
    'autoColumns',
    'inline',
]);

import { definePropKeys } from '@no-comply/solid-primitives';

import type { FlexMixinProps } from './types';

export const $FLEX_MIXIN = 'mixin:composable:flex';

export const FLEX_MIXIN_PROPS = definePropKeys<FlexMixinProps>()([
    'direction',
    'align',
    'justify',
    'gap',
    'shrink',
    'wrap',
    'flex',
    'inline',
]);

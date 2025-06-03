import { definePropKeys } from '@no-comply/solid-primitives';

import { LAYOUT_GAP_PROPS } from '../../constants';

import type { FlexMixinProps } from './types';

export const $FLEX_MIXIN = 'mixin:composable:flex';

export const FLEX_MIXIN_PROPS = definePropKeys<FlexMixinProps>()([
    ...LAYOUT_GAP_PROPS,
    'direction',
    'align',
    'justify',
    'shrink',
    'wrap',
    'flex',
    'inline',
]);

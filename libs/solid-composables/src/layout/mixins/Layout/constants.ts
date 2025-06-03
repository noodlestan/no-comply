import { definePropKeys } from '@no-comply/solid-primitives';

import { LAYOUT_PADDING_PROPS } from '../../constants';

import type { LayoutMixinProps } from './types';

export const $LAYOUT_MIXIN = 'mixin:composable:layout';

export const LAYOUT_MIXIN_PROPS = definePropKeys<LayoutMixinProps>()([
    ...LAYOUT_PADDING_PROPS,
    'stretch',
    'uncontained',
    'overflow',
]);

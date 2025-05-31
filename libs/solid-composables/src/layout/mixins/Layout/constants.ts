import { definePropKeys } from '@no-comply/solid-primitives';

import type { LayoutMixinProps } from './types';

export const $LAYOUT_MIXIN = 'mixin:composable:layout';

export const LAYOUT_MIXIN_PROPS = definePropKeys<LayoutMixinProps>()([
    'padding',
    'stretch',
    'uncontained',
    'overflow',
]);

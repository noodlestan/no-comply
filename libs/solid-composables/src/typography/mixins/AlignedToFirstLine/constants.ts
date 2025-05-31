import { definePropKeys } from '@no-comply/solid-primitives';

import type { AlignedToFirstLineMixinProps } from './types';

export const $ALIGNED_TO_FIRST_LINE_MIXIN = 'mixin:composable:aligned-to-first-line';

export const ALIGNED_TO_FIRST_LINE_MIXIN_PROPS = definePropKeys<AlignedToFirstLineMixinProps>()([
    'aligned',
]);

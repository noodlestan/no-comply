import { definePropKeys } from '@no-comply/solid-primitives';

import { FOCUS_RING_OFFSET_MIXIN_PROPS } from '../FocusRingOffset';

import type { FocusRingMixinProps } from './types';

export const $FOCUS_RING_MIXIN = 'mixin:standard:focus-ring';

export const FOCUS_RING_MIXIN_PROPS = definePropKeys<FocusRingMixinProps>()(
    FOCUS_RING_OFFSET_MIXIN_PROPS,
);

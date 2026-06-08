import { definePropKeys } from '@no-comply/solid-primitives';

import type { FocusRingOffsetMixinProps } from './types';

export const $FOCUS_RING_OFFSET_MIXIN = 'mixin:standard:focus-ring-offset';

export const FOCUS_RING_OFFSET_MIXIN_PROPS = definePropKeys<FocusRingOffsetMixinProps>()(['inset']);

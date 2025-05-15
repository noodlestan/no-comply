import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { FOCUS_RING_OFFSET_MIXIN_PROPS } from '../FocusRingOffset';

import type { FocusRingMixinProps } from './types';

export const FOCUS_RING_MIXIN_PROPS = definePropKeys<FocusRingMixinProps>()(
    FOCUS_RING_OFFSET_MIXIN_PROPS,
);

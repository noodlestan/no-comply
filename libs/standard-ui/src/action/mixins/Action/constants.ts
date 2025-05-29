import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { FOCUS_RING_OFFSET_MIXIN_PROPS } from '../../../focus';

import type { ActionMixinProps } from './types';

export const ACTION_MIXIN_PROPS = definePropKeys<ActionMixinProps>()([
    ...FOCUS_RING_OFFSET_MIXIN_PROPS,
    'variant',
    'intent',
]);

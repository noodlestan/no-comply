import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { ActionMixinProps } from './types';

export const ACTION_MIXIN_PROPS = definePropKeys<ActionMixinProps>()(['variant', 'intent']);

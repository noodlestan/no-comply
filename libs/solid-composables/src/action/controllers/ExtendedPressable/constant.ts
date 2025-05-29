import { EXTENDED_PRESS_EVENT_HANDLERS, definePropKeys } from '@no-comply/solid-primitives';

import { PRESSABLE_PROPS } from '../Pressable';

import type { ExtendedPressableProps } from './types';

export const EXTENDED_PRESSABLE_PROPS = definePropKeys<ExtendedPressableProps>()([
    ...PRESSABLE_PROPS,
    ...EXTENDED_PRESS_EVENT_HANDLERS,
    'doublePressThreshold',
    'longPressThreshold',
]);

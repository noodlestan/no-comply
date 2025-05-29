import { ARIA_PRESSABLE_PROPS } from '@noodlestan/context-ui-aria';
import { PRESS_EVENT_HANDLERS, definePropKeys } from '@noodlestan/context-ui-primitives';

import type { PressableProps } from './types';

export const PRESSABLE_PROPS = definePropKeys<PressableProps>()([
    ...ARIA_PRESSABLE_PROPS,
    ...PRESS_EVENT_HANDLERS,
]);

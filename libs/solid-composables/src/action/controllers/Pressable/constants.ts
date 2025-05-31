import { ARIA_PRESSABLE_PROPS } from '@no-comply/solid-accessibility';
import { PRESS_EVENT_HANDLERS, definePropKeys } from '@no-comply/solid-primitives';

import type { PressableProps } from './types';

export const $PRESSABLE = 'controller:composable:pressable';

export const PRESSABLE_PROPS = definePropKeys<PressableProps>()([
    ...ARIA_PRESSABLE_PROPS,
    ...PRESS_EVENT_HANDLERS,
]);

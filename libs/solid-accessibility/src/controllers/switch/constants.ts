import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { ARIA_PRESSABLE_PROPS } from '../pressable';

import type { AriaSwitchProps } from './types';

export const ARIA_SWITCH_PROPS = definePropKeys<AriaSwitchProps>()([
	...omitPropKeys(ARIA_PRESSABLE_PROPS, ['type'] as const),
	'checked',
]);

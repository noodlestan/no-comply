import { definePropKeys } from '@no-comply/solid-primitives';

import type { AriaPressableProps } from './types';

export const ARIA_PRESSABLE_PROPS = definePropKeys<AriaPressableProps>()([
	'tag',
	'role',
	'type',
	'tabIndex',
	'disabled',
]);

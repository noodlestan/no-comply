import { definePropKeys } from '@no-comply/solid-primitives';

import type { BaseInputValueProps } from './types';

export const BASE_INPUT_VALUE_PROPS = definePropKeys<BaseInputValueProps<unknown>>()([
	'value',
	'onChange',
	'onValueChange',
]);

import { definePropKeys } from '@no-comply/solid-primitives';

import type { BaseInputProps } from './types';

export const $BASE_INPUT = 'controller:composable:base-input';

export const BASE_INPUT_PROPS = definePropKeys<BaseInputProps>()([
	'id',
	'value',
	'disabled',
	'invalid',
	'onChange',
	'onValueChange',
]);

import { definePropKeys } from '@no-comply/solid-primitives';

import { BASE_INPUT_VALUE_PROPS } from '../../constants';

import type { NumberInputValueProps } from './types';

export const $NUMBER_INPUT_VALUE = 'controller:composable:number-input-value';

export const NUMBER_INPUT_VALUE_PROPS = definePropKeys<NumberInputValueProps>()([
	...BASE_INPUT_VALUE_PROPS,
	'placeholder',
	'maxLength',
	'min',
	'max',
	'step',
]);

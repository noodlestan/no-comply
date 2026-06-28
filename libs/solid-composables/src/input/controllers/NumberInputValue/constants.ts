import { definePropKeys } from '@no-comply/solid-primitives';

import { BASE_INPUT_PROPS } from '../../constants';

import type { NumberInputValueProps } from './types';

export const VALID_KEYS = [
	'Tab',
	'Enter',
	'Backspace',
	'ArrowLeft',
	'ArrowRight',
	'Delete',
	'Escape',
	'-',
	'.',
];

export const ROUND_PRECISION = 10000;

export const $NUMBER_INPUT_VALUE = 'component:standard:number-input';

export const NUMBER_INPUT_VALUE_PROPS = definePropKeys<NumberInputValueProps>()([
	...BASE_INPUT_PROPS,
	'placeholder',
	'maxLength',
	'min',
	'max',
	'step',
]);

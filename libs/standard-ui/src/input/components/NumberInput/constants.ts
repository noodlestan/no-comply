import { BASE_INPUT_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { INPUT_BOX_MIXIN_PROPS, SIZED_INPUT_BOX_MIXIN_PROPS } from '../../mixins';

import type { NumberInputProps } from './types';

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

export const $NUMBER_INPUT = 'component:standard:number-input';

export const NUMBER_INPUT_PROPS = definePropKeys<NumberInputProps>()([
	...BASE_INPUT_PROPS,
	...INPUT_BOX_MIXIN_PROPS,
	...SIZED_INPUT_BOX_MIXIN_PROPS,
	'placeholder',
	'length',
	'maxLength',
	'min',
	'max',
	'step',
]);

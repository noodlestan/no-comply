import { NUMBER_INPUT_VALUE_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { CONTENT_LENGTH_MIXIN_PROPS } from '../../../content';
import { INPUT_STATE_MIXIN_PROPS, SIZED_INPUT_BOX_MIXIN_PROPS } from '../../mixins';

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
	...INPUT_STATE_MIXIN_PROPS,
	...NUMBER_INPUT_VALUE_PROPS,
	...SIZED_INPUT_BOX_MIXIN_PROPS,
	...CONTENT_LENGTH_MIXIN_PROPS,
]);

import { definePropKeys } from '@no-comply/solid-primitives';

import { BASE_INPUT_VALUE_PROPS } from '../../constants';

import type { TextInputValueProps } from './types';

export const $TEXT_INPUT_VALUE = 'component:composable:text-input-value';

export const TEXT_INPUT_VALUE_PROPS = definePropKeys<TextInputValueProps>()([
	...BASE_INPUT_VALUE_PROPS,
	'type',
	'placeholder',
	'maxLength',
]);

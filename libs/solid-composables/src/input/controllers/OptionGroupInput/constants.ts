import { ARIA_RADIO_GROUP_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys } from '@no-comply/solid-primitives';

import { BASE_INPUT_PROPS } from '../BaseInput';

import type { OptionGroupInputProps } from './types';

export const $OPTION_GROUP_INPUT = 'controller:composable:option-group-input';

export const OPTION_GROUP_INPUT_PROPS = definePropKeys<OptionGroupInputProps>()([
	'name',
	...ARIA_RADIO_GROUP_PROPS,
	...BASE_INPUT_PROPS,
]);

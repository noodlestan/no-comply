import { BASE_INPUT_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { INPUT_BOX_MIXIN_PROPS, SIZED_INPUT_BOX_MIXIN_PROPS } from '../../mixins';

import type { TextInputProps } from './types';

export const $TEXT_INPUT = 'component:standard:text-input';

export const TEXT_INPUT_PROPS = definePropKeys<TextInputProps>()([
	...BASE_INPUT_PROPS,
	...INPUT_BOX_MIXIN_PROPS,
	...SIZED_INPUT_BOX_MIXIN_PROPS,
	'type',
	'placeholder',
	'length',
	'maxLength',
	'modified',
]);

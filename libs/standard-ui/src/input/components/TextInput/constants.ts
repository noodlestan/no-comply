import { TEXT_INPUT_VALUE_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { CONTENT_LENGTH_MIXIN_PROPS } from '../../../content';
import { INPUT_STATE_MIXIN_PROPS, SIZED_INPUT_BOX_MIXIN_PROPS } from '../../mixins';

import type { TextInputProps } from './types';

export const $TEXT_INPUT = 'component:standard:text-input';

export const TEXT_INPUT_PROPS = definePropKeys<TextInputProps>()([
	...INPUT_STATE_MIXIN_PROPS,
	...TEXT_INPUT_VALUE_PROPS,
	...SIZED_INPUT_BOX_MIXIN_PROPS,
	...CONTENT_LENGTH_MIXIN_PROPS,
]);

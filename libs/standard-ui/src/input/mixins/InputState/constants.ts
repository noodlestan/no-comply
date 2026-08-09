import { BASE_INPUT_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { InputStateMixinProps } from './types';

export const $INPUT_STATE_MIXIN = 'mixin:standard:input-state';

export const INPUT_STATE_MIXIN_PROPS = definePropKeys<InputStateMixinProps>()([
	...BASE_INPUT_PROPS,
	'modified',
	'positive',
]);

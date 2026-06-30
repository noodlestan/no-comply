import { BASE_INPUT_PROPS } from '@no-comply/solid-composables';
import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import type { InputStateMixinProps } from './types';

export const $INPUT_STATE_MIXIN = 'mixin:standard:input-state';

export const INPUT_STATE_MIXIN_PROPS = definePropKeys<InputStateMixinProps>()([
	...omitPropKeys(BASE_INPUT_PROPS, ['id'] as const),
	'modified',
	'positive',
]);

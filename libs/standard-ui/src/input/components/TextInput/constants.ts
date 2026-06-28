import { TEXT_INPUT_VALUE_PROPS } from '@no-comply/solid-composables';
import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { INPUT_BOX_MIXIN_PROPS, SIZED_INPUT_BOX_MIXIN_PROPS } from '../../mixins';

import type { TextInputProps } from './types';

export const $TEXT_INPUT = 'component:standard:text-input';

export const TEXT_INPUT_PROPS = definePropKeys<TextInputProps>()([
	...TEXT_INPUT_VALUE_PROPS,
	...omitPropKeys(INPUT_BOX_MIXIN_PROPS, ['disabled', 'invalid', 'modified'] as const),
	...SIZED_INPUT_BOX_MIXIN_PROPS,
	'length',
]);

import { ALIGNED_TO_FIRST_LINE_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { InputBoxMixinProps } from './types';

export const $INPUT_BOX_MIXIN = 'mixin:standard:input-box';

export const INPUT_BOX_MIXIN_PROPS = definePropKeys<InputBoxMixinProps>()([
	...ALIGNED_TO_FIRST_LINE_MIXIN_PROPS,
]);

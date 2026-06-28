import { TYPOGRAPHY_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { SizedInputBoxMixinProps } from './types';

export const $SIZED_INPUT_BOX_MIXIN = 'mixin:standard:sized-input-box';

export const SIZED_INPUT_BOX_MIXIN_PROPS = definePropKeys<SizedInputBoxMixinProps>()([
	...TYPOGRAPHY_MIXIN_PROPS,
	'size',
]);

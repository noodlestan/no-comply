import { TYPOGRAPHY_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { InputTypographyMixinProps } from './types';

export const $INPUT_TYPOGRAPHY_MIXIN = 'mixin:standard:input-typography';

export const INPUT_TYPOGRAPHY_MIXIN_PROPS = definePropKeys<InputTypographyMixinProps>()([
	...TYPOGRAPHY_MIXIN_PROPS,
	'variant',
]);

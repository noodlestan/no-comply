import { TYPOGRAPHY_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { TextMixinProps } from './types';

export const $TEXT_MIXIN = 'mixin:standard:text';

export const TEXT_MIXIN_PROPS = definePropKeys<TextMixinProps>()([
	...TYPOGRAPHY_MIXIN_PROPS,
	'variant',
]);

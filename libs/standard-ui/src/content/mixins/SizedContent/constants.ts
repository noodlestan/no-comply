import { ALIGNED_TO_FIRST_LINE_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { SizedContentMixinProps } from './types';

export const $SIZED_CONTENT_MIXIN = 'mixin:standard:sized-content';

export const SIZED_CONTENT_MIXIN_PROPS = definePropKeys<SizedContentMixinProps>()([
	...ALIGNED_TO_FIRST_LINE_MIXIN_PROPS,
	'size',
	'scale',
]);

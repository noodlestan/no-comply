import { SIZED_TYPOGRAPHY_MIXIN_PROPS, TYPOGRAPHY_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { DisplayMixinProps } from './types';

export const $DISPLAY_MIXIN = 'mixin:standard:display';

export const DISPLAY_MIXIN_PROPS = definePropKeys<DisplayMixinProps>()([
	...TYPOGRAPHY_MIXIN_PROPS,
	...SIZED_TYPOGRAPHY_MIXIN_PROPS,
	'size',
	'level',
	'variant',
]);

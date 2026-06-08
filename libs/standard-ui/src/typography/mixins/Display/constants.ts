import { TEXT_MIXIN_PROPS as HEADLESS_TEXT_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { DisplayMixinProps } from './types';

export const $DISPLAY_MIXIN = 'mixin:standard:display';

export const DISPLAY_MIXIN_PROPS = definePropKeys<DisplayMixinProps>()([
	...HEADLESS_TEXT_MIXIN_PROPS,
	'level',
	'variant',
]);

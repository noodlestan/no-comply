import { FLEX_MIXIN_PROPS as HEADLESS_FLEX_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { FlexMixinProps } from './types';

export const $FLEX_MIXIN = 'mixin:standard:flex';

export const FLEX_MIXIN_PROPS = definePropKeys<FlexMixinProps>()([
	...HEADLESS_FLEX_MIXIN_PROPS,
	'gap',
]);

import { SIZED_TYPOGRAPHY_MIXIN_PROPS, TYPOGRAPHY_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { MonoMixinProps } from './types';

export const $MONO_MIXIN = 'mixin:standard:mono';

export const MONO_MIXIN_PROPS = definePropKeys<MonoMixinProps>()([
	...TYPOGRAPHY_MIXIN_PROPS,
	...SIZED_TYPOGRAPHY_MIXIN_PROPS,
	'size',
]);

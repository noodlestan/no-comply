import { ALIGNED_TO_FIRST_LINE_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { SizedIconMixinProps } from './types';

export const $SIZED_ICON_MIXIN = 'mixin:standard:icon';

export const SIZED_ICON_MIXIN_PROPS = definePropKeys<SizedIconMixinProps>()([
	...ALIGNED_TO_FIRST_LINE_MIXIN_PROPS,
	'size',
]);

import { ALIGNED_TO_FIRST_LINE_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { SizedActionMixinProps } from './types';

export const $SIZED_ACTION_MIXIN = 'mixin:standard:sized-action';

export const SIZED_ACTION_MIXIN_PROPS = definePropKeys<SizedActionMixinProps>()([
	...ALIGNED_TO_FIRST_LINE_MIXIN_PROPS,
	'size',
]);

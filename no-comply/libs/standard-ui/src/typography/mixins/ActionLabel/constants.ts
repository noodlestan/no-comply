import { SIZED_TYPOGRAPHY_MIXIN_PROPS, TYPOGRAPHY_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { ActionLabelMixinProps } from './types';

export const $ACTION_LABEL_MIXIN = 'mixin:standard:action-label';

export const ACTION_LABEL_MIXIN_PROPS = definePropKeys<ActionLabelMixinProps>()([
	...TYPOGRAPHY_MIXIN_PROPS,
	...SIZED_TYPOGRAPHY_MIXIN_PROPS,
	'size',
]);

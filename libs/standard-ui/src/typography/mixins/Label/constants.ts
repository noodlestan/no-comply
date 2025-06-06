import { TEXT_MIXIN_PROPS as HEADLESS_TEXT_MIXIN_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { LabelMixinProps } from './types';

export const $LABEL_MIXIN = 'mixin:standard:label';

export const LABEL_MIXIN_PROPS = definePropKeys<LabelMixinProps>()([
	...HEADLESS_TEXT_MIXIN_PROPS,
	'for',
	'variant',
]);

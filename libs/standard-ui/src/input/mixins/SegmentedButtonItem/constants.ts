import { definePropKeys } from '@no-comply/solid-primitives';

import type { SegmentedButtonItemMixinProps } from './types';

export const $SEGMENTED_BUTTON_ITEM_MIXIN = 'mixin:standard:segmented-button';

export const SEGMENTED_BUTTON_ITEM_MIXIN_PROPS = definePropKeys<SegmentedButtonItemMixinProps>()([
	'active',
	'size',
	'disabled',
]);

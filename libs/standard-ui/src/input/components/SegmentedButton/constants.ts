import { OPTION_GROUP_INPUT_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { SEGMENTED_BUTTON_MIXIN_PROPS } from '../../mixins';

import type { SegmentedButtonProps } from './types';

export const $SEGMENTED_BUTTON = 'component:standard:segmented-button';

export const SEGMENTED_BUTTON_PROPS = definePropKeys<SegmentedButtonProps>()([
	...OPTION_GROUP_INPUT_PROPS,
	...SEGMENTED_BUTTON_MIXIN_PROPS,
]);

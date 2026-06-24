import { definePropKeys } from '@no-comply/solid-primitives';

import type { SegmentedButtonMixinProps } from './types';

export const $SEGMENTED_BUTTON_MIXIN = 'mixin:standard:segmented-button';

export const SEGMENTED_BUTTON_MIXIN_PROPS = definePropKeys<SegmentedButtonMixinProps>()(['size']);

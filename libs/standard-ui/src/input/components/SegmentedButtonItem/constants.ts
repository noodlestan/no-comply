import { definePropKeys } from '@no-comply/solid-primitives';

import type { SegmentedButtonItemProps } from './types';

export const $SEGMENTED_BUTTON_ITEM = 'component:standard:segmented-button';

export const SEGMENTED_BUTTON_ITEM_PROPS = definePropKeys<SegmentedButtonItemProps>()(['value']);

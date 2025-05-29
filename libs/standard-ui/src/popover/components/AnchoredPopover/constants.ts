import {
    ANCHORED_POPOVER_BASE_PROPS,
    ANCHORED_POPOVER_PROPS as HEADLESS_ANCHORED_POPOVER_PROPS,
} from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import type { AnchoredPopoverProps } from './types';

export const ANCHORED_POPOVER_PROPS = definePropKeys<AnchoredPopoverProps>()([
    ...ANCHORED_POPOVER_BASE_PROPS,
    ...HEADLESS_ANCHORED_POPOVER_PROPS,
]);

import { definePropKeys } from '@noodlestan/context-ui-primitives';
import {
    ANCHORED_POPOVER_BASE_PROPS,
    ANCHORED_POPOVER_PROPS as HEADLESS_ANCHORED_POPOVER_PROPS,
} from '@noodlestan/headless-ui';

import type { AnchoredPopoverProps } from './types';

export const ANCHORED_POPOVER_PROPS = definePropKeys<AnchoredPopoverProps>()([
    ...ANCHORED_POPOVER_BASE_PROPS,
    ...HEADLESS_ANCHORED_POPOVER_PROPS,
]);

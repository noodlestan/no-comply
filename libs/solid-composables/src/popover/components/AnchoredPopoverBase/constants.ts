import { definePropKeys } from '@no-comply/solid-primitives';

import type { AnchoredPopoverBaseProps } from './types';

export const ANCHORED_POPOVER_BASE_PROPS = definePropKeys<AnchoredPopoverBaseProps>()([
    'trigger',
    'children',
]);

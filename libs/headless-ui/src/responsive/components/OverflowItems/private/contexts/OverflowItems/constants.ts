import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { OverflowItemsContextOptions } from './types';

export const OVERFLOW_ITEMS_CONTEXT_OPTIONS = definePropKeys<OverflowItemsContextOptions>()([
    'current',
    'items',
    'renderItem',
    'renderToggle',
]);

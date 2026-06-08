import { definePropKeys } from '@no-comply/solid-primitives';

import type { OverflowItemsContextOptions } from './types';

export const OVERFLOW_ITEMS_CONTEXT_OPTIONS = definePropKeys<OverflowItemsContextOptions>()([
	'items',
	'currentItemId',
	'renderItem',
	'renderToggle',
]);

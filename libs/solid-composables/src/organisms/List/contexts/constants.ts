import { definePropKeys } from '@no-comply/solid-primitives';

import type { ListContextOptions } from './types';

export const LIST_CONTEXT_OPTIONS = definePropKeys<ListContextOptions>()([
	'components',
	'items',
	'disabled',
	'selected',
]);

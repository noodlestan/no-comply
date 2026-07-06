import { definePropKeys } from '@no-comply/solid-primitives';

import type { TreeListContextOptions } from './types';

export const TREE_LIST_CONTEXT_OPTIONS = definePropKeys<TreeListContextOptions>()([
	'root',
	'components',
	'labels',
	'icons',
	'disabled',
	'selected',
	'expanded',
]);

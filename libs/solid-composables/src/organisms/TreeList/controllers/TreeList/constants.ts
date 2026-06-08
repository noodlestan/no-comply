import { ARIA_TREE_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys } from '@no-comply/solid-primitives';

import { TREE_LIST_CONTEXT_OPTIONS } from '../../contexts';

import type { TreeListProps } from './types';

export const $TREE_LIST = 'controller:composable:tree-list';

export const TREE_LIST_PROPS = definePropKeys<TreeListProps>()([
	...TREE_LIST_CONTEXT_OPTIONS,
	...ARIA_TREE_PROPS,
	'keyboard',
	'expand',
	'labels',
	'icons',
]);

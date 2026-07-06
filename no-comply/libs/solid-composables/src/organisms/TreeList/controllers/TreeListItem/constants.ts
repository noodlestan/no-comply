import { ARIA_LABELLED_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys } from '@no-comply/solid-primitives';

import { TREE_LIST_ITEM_COMMON_PROPS } from '../../private';

import type { TreeListItemProps } from './types';

export const $TREE_LIST_ITEM = 'controller:composable:tree-list-item';

export const TREE_LIST_ITEM_PROPS = definePropKeys<TreeListItemProps>()([
	...ARIA_LABELLED_PROPS,
	...TREE_LIST_ITEM_COMMON_PROPS,
	'setSize',
	'posInSet',
]);

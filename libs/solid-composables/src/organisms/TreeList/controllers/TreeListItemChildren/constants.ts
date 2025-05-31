import { ARIA_LABELLED_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys } from '@no-comply/solid-primitives';

import { TREE_LIST_ITEM_COMMON_PROPS } from '../../private';

import type { TreeListItemChildrenProps } from './types';

export const $TREE_LIST_ITEM_CHILDREN = 'controller:composable:tree-list-item-children';

export const TREE_LIST_ITEM_CHILDREN_PROPS = definePropKeys<TreeListItemChildrenProps>()([
    ...ARIA_LABELLED_PROPS,
    ...TREE_LIST_ITEM_COMMON_PROPS,
]);

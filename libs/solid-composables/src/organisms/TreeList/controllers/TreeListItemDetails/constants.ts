import { ARIA_LABELLED_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys } from '@no-comply/solid-primitives';

import { TREE_LIST_ITEM_COMMON_PROPS } from '../../private';

import type { TreeListItemDetailsProps } from './types';

export const $TREE_LIST_ITEM_DETAILS = 'controller:composable:tree-list-item-details';

export const TREE_LIST_ITEM_DETAILS_PROPS = definePropKeys<TreeListItemDetailsProps>()([
    ...ARIA_LABELLED_PROPS,
    ...TREE_LIST_ITEM_COMMON_PROPS,
]);

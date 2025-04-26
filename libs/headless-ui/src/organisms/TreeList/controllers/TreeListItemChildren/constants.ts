import { ARIA_LABELLED_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { TREE_LIST_ITEM_COMMON_PROPS } from '../../private';

import type { TreeListItemChildrenProps } from './types';

export const TREE_LIST_ITEM_CHILDREN_PROPS = definePropKeys<TreeListItemChildrenProps>()([
    ...ARIA_LABELLED_PROPS,
    ...TREE_LIST_ITEM_COMMON_PROPS,
]);

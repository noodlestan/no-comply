import { definePropKeys } from '@no-comply/solid-primitives';

import { TREE_LIST_ITEM_PROPS } from '../../controllers';

import type { TreeListItemBaseProps } from './types';

export const $TREE_LIST_ITEM_BASE = 'component:composable:tree-list-item-base';

export const TREE_LIST_ITEM_BASE_PROPS =
	definePropKeys<TreeListItemBaseProps>()(TREE_LIST_ITEM_PROPS);

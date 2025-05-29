import { definePropKeys } from '@no-comply/solid-primitives';

import { TREE_LIST_ITEM_PROPS } from '../../controllers';

import type { TreeListItemBaseProps } from './types';

export const TREE_LIST_ITEM_BASE_PROPS =
    definePropKeys<TreeListItemBaseProps>()(TREE_LIST_ITEM_PROPS);

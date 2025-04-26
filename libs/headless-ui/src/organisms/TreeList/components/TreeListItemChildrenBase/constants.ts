import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { TREE_LIST_ITEM_CHILDREN_PROPS } from '../../controllers';

import type { TreeListItemChildrenBaseProps } from './types';

export const TREE_LIST_ITEM_CHILDREN_BASE_PROPS = definePropKeys<TreeListItemChildrenBaseProps>()(
    TREE_LIST_ITEM_CHILDREN_PROPS,
);

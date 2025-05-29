import { definePropKeys } from '@no-comply/solid-primitives';

import { TREE_LIST_ITEM_DETAILS_PROPS } from '../../controllers';

import type { TreeListItemDetailsBaseProps } from './types';

export const TREE_LIST_ITEM_DETAILS_BASE_PROPS = definePropKeys<TreeListItemDetailsBaseProps>()(
    TREE_LIST_ITEM_DETAILS_PROPS,
);

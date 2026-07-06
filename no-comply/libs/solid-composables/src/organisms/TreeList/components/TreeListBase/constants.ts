import { definePropKeys } from '@no-comply/solid-primitives';

import { TREE_LIST_PROPS } from '../../controllers';

import type { TreeListBaseProps } from './types';

export const $TREE_LIST_BASE = 'component:composable:tree-list-base';

export const TREE_LIST_BASE_PROPS = definePropKeys<TreeListBaseProps>()(TREE_LIST_PROPS);

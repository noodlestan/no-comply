import { ARIA_LABELLED_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { TREE_LIST_ITEM_COMMON_PROPS } from '../../private';

import type { TreeListItemProps } from './types';

export const TREE_LIST_ITEM_PROPS = definePropKeys<TreeListItemProps>()([
    ...ARIA_LABELLED_PROPS,
    ...TREE_LIST_ITEM_COMMON_PROPS,
    'setSize',
    'posInSet',
]);

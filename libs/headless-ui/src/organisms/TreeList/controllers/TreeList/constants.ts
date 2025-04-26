import { ARIA_TREE_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

import { TREE_LIST_CONTEXT_OPTIONS } from '../../contexts';

import type { TreeListProps } from './types';

export const TREE_LIST_PROPS = definePropKeys<TreeListProps>()([
    ...TREE_LIST_CONTEXT_OPTIONS,
    ...ARIA_TREE_PROPS,
    'keyboard',
    'expand',
    'labels',
    'icons',
]);

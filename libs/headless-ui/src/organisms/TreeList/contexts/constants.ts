import { definePropKeys } from '@noodlestan/context-ui-primitives';

import type { TreeListContextOptions } from './types';

export const TREE_LIST_CONTEXT_OPTIONS = definePropKeys<TreeListContextOptions>()([
    'root',
    'components',
    'labels',
    'icons',
    'disabled',
    'selected',
    'expanded',
]);

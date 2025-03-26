import type { Accessor } from 'solid-js';

import type { MaybeAccessorOrValue } from '../../../private';
import type { TreeKeyboardControllerAPI, TreeState } from '../controllers';
import type {
    TreeItemComponent,
    TreeListIcons,
    TreeListLabels,
    TreeListOptions,
    TreeNode,
} from '../types';

export type TreeListContextValue = {
    root: Accessor<TreeNode>;
    component: TreeItemComponent;
    options: Omit<TreeListOptions, 'component' | 'expand' | 'labels' | 'icons'>;
    labels: TreeListLabels;
    icons: TreeListIcons;
    keyboard: TreeKeyboardControllerAPI;
    state: TreeState;
    expand?: MaybeAccessorOrValue<boolean | number>;
};

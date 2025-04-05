import type { Accessor } from 'solid-js';

import type { TreeKeyboardControllerAPI, TreeState } from '../controllers';
import type { TreeListIcons, TreeListLabels, TreeListProps, TreeNode } from '../types';

export type TreeListContextValue = Omit<TreeListProps, 'labels' | 'icons'> & {
    labels: TreeListLabels;
    icons: TreeListIcons;
    root: Accessor<TreeNode>;
    keyboard: TreeKeyboardControllerAPI;
    state: TreeState;
};

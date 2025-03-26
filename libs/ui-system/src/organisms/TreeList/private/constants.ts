import { ChevronDownIcon, ChevronRightIcon } from 'lucide-solid';

import { createIconValue } from '../../../icons';
import type { TreeListIcons, TreeListLabels, TreeNode } from '../types';

export const LABELS: TreeListLabels = {
    item: 'Tree item',
    group: (n: TreeNode) => `Sub-items of ${n.id}`,
    expand: (n: TreeNode) => `Expand item ${n.id}`,
    collapse: (n: TreeNode) => `Collapse item ${n.id}`,
    select: (n: TreeNode) => `Select item ${n.id}`,
    details: 'Item details',
};

export const ICONS: TreeListIcons = {
    expanded: createIconValue(ChevronDownIcon),
    collapsed: createIconValue(ChevronRightIcon),
};

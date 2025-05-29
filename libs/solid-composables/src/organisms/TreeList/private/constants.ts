import { createIconValue } from '@no-comply/solid-contexts';
import { ChevronDownIcon, ChevronRightIcon } from 'lucide-solid';

import type { TreeListIcons, TreeListLabels, TreeNode } from '../types';

export const TREE_LIST_ITEM_COMMON_PROPS = [
    'node',
    'expand',
    'level',
    'parent',
    'parentSelected',
] as const;

export const LABELS: TreeListLabels = {
    item: 'Tree item',
    group: (n: TreeNode) => `Sub-items of ${n.id}`,
    expanded: (n: TreeNode) => `Expand item ${n.id}`,
    collapsed: (n: TreeNode) => `Collapse item ${n.id}`,
    select: (n: TreeNode) => `Select item ${n.id}`,
    details: 'Item details',
};

export const ICONS: TreeListIcons = {
    expanded: createIconValue(ChevronDownIcon),
    collapsed: createIconValue(ChevronRightIcon),
};

import type { TreeItem, TreeItemComponent, TreeNode } from '../types';

export const createTreeBaseNode = (
    item: TreeItem,
    id: string,
    component?: TreeItemComponent,
): TreeNode => {
    return {
        id,
        object: item,
        component,
    };
};

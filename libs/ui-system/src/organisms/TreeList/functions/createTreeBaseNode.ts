import type { TreeItem, TreeNode, TreeNodeItemComponent } from '../types';

export const createTreeBaseNode = (
    item: TreeItem,
    id: string,
    component?: TreeNodeItemComponent,
): TreeNode => {
    return {
        id,
        object: item,
        component,
    };
};

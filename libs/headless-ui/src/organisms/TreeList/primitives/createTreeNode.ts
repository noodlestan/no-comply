import { createTreeBaseNode, generateTreeNodeUniqueId } from '../functions';
import type { TreeItem, TreeItemComponent, TreeNode } from '../types';

export const createTreeNode = (
    item: TreeItem,
    parentNode: TreeNode | undefined,
    id: string | (() => string) = 'root',
    nodeChildren?: (parentNode: TreeNode) => TreeNode[],
    nodeComponent?: TreeItemComponent,
): TreeNode => {
    const node = createTreeBaseNode(
        item,
        generateTreeNodeUniqueId(parentNode?.id, id),
        nodeComponent,
    );
    const children = nodeChildren && nodeChildren(node);
    return {
        ...node,
        children,
    };
};

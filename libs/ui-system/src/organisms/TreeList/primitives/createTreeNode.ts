import { createTreeBaseNode, generateTreeNodeUniqueId } from '../functions';
import type { TreeItem, TreeItemComponent, TreeNode } from '../types';

export const createTreeNode = (
    item: TreeItem,
    parentNode: TreeNode | null,
    id: string | (() => string) = 'root',
    childrenCreator?: (parentNode: TreeNode) => TreeNode[],
    nodeComponent?: TreeItemComponent,
): TreeNode => {
    const node = createTreeBaseNode(
        item,
        generateTreeNodeUniqueId(parentNode?.id, id),
        nodeComponent,
    );
    const children = childrenCreator && childrenCreator(node);
    return {
        ...node,
        children,
    };
};

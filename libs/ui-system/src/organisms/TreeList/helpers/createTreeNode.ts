import { createTreeBaseNode, generateTreeNodeUniqueId } from '../functions';
import { TreeFolder, TreeItem, TreeNode, TreeNodeItemComponent } from '../types';

export const createTreeNode = (
    item: TreeItem,
    parentNode: TreeNode | null,
    id: string | (() => string) = 'root',
    childrenCreator?: (parentNode: TreeNode) => TreeNode[],
    nodeComponent?: TreeNodeItemComponent,
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

export const createTreeFolder = (
    name: string,
    parentNode: TreeNode | null,
    childrenCreator?: (parentNode: TreeNode) => TreeNode[],
    nodeComponent?: TreeNodeItemComponent,
): TreeNode => {
    const item: TreeFolder = {
        id: name,
        type: 'folder',
        name,
    };
    return createTreeNode(item, parentNode, name, childrenCreator, nodeComponent);
};

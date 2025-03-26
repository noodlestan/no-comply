import { type ContextNode, type TreeNode, createTreeNode } from '@noodlestan/context-ui';
import { type Accessor, createMemo } from 'solid-js';

export const createDebugContextTree = (root: ContextNode): Accessor<TreeNode> => {
    const createEntityTreeNode = (node: ContextNode, parentNode?: TreeNode): TreeNode => {
        const createChildren = (parentNode: TreeNode) => {
            return node.children().map(child => {
                return createEntityTreeNode(child, parentNode);
            });
        };

        return createTreeNode(node, parentNode || null, node.id, createChildren);
    };

    return createMemo(() => createEntityTreeNode(root));
};

import { type TreeNode, createTreeNode } from '@no-comply/solid-composables';
import { type ContextNode } from '@no-comply/solid-contexts';
import { type Accessor, createMemo } from 'solid-js';

export const createDebugContextTree = (root: ContextNode): Accessor<TreeNode> => {
    const createContextNode = (node: ContextNode, parentNode?: TreeNode): TreeNode => {
        const createChildren = (parentNode: TreeNode) => {
            return node.children().map(child => {
                return createContextNode(child, parentNode);
            });
        };

        return createTreeNode(node, parentNode, node.id, createChildren);
    };

    return createMemo(() => createContextNode(root));
};

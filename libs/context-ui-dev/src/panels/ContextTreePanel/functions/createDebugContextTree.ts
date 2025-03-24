import { type ContextNode, type TreeNode, createTreeNode } from '@noodlestan/ui-system';
import { type Accessor, createMemo } from 'solid-js';

import { ContextTreeNode } from '../parts';

export const createDebugContextTree = (root: ContextNode): Accessor<TreeNode> => {
    const component = ContextTreeNode;

    const createEntityTreeNode = (node: ContextNode, parentNode?: TreeNode): TreeNode => {
        const createChildren = (parentNode: TreeNode) => {
            return node.children().map(child => {
                return createEntityTreeNode(child, parentNode);
            });
        };

        return createTreeNode(node, parentNode || null, node.id, createChildren, component);
    };

    return createMemo(() => createEntityTreeNode(root));
};

import type { Component } from 'solid-js';

import type { TreeItem, TreeListItemContentsProps, TreeNode } from '../types';

import { generateTreeNodeUniqueId } from './private';

export const createTreeNode = (
	item: TreeItem,
	parentNode: TreeNode | undefined,
	id: string | (() => string) = 'root',
	nodeChildren?: (parentNode: TreeNode) => TreeNode[],
	nodeComponent?: Component<TreeListItemContentsProps>,
): TreeNode => {
	const node = {
		id: generateTreeNodeUniqueId(parentNode?.id, id),
		object: item,
		component: nodeComponent,
	} as TreeNode;
	node.children = (nodeChildren && nodeChildren(node)) ?? [];
	return node;
};

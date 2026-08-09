import type { TreeNode } from '@no-comply/solid-composables';

export type TreeListItemDetailsProps = {
	node: TreeNode;
	expand: number | boolean | undefined;
	level: number;
	parent: TreeNode | undefined;
	parentSelected: boolean;
};

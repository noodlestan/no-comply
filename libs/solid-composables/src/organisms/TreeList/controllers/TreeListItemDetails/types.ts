import type { AriaLabelledProps } from '@no-comply/solid-accessibility';
import type { PropsWithComponent } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { ExpandActionProps } from '../../../../action';
import type { FocusableBaseProps } from '../../../../focus';
import type { TreeListItemContentsProps, TreeNode } from '../../types';

export type TreeListItemDetailsProps = AriaLabelledProps & {
	node: TreeNode;
	expand: boolean | number | undefined;
	level: number;
	parent: TreeNode | undefined;
	parentSelected: boolean;
};

export type TreeListItemDetailsAPI = {
	$root: {
		'data-tree-item-id': string;
		'data-tree-item-is-expandable': '' | undefined;
		'data-tree-item-is-selected': '' | undefined;
		'data-tree-item-is-parent-selected': '' | undefined;
	};
	_focusable: FocusableBaseProps;
	_buttonExpand: PropsWithComponent<ExpandActionProps>;
	_treeListItemContents: PropsWithComponent<TreeListItemContentsProps>;
	hasToggle: Accessor<boolean>;
};

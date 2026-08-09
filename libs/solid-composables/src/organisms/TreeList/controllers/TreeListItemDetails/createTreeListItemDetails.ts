import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, dataBoolean, labelValue } from '@no-comply/solid-primitives';

import { createExtendedPressable } from '../../../../action';
import { getTreeSelectionUntil } from '../../helpers';
import { useTreeList } from '../../providers';
import type { TreeNode } from '../../types';

import { $TREE_LIST_ITEM_DETAILS } from './constants';
import type { TreeListItemDetailsAPI, TreeListItemDetailsProps } from './types';

export const createTreeListItemDetails = (
	props: TreeListItemDetailsProps,
): TreeListItemDetailsAPI => {
	const [locals, expose, compose] = createExposable($TREE_LIST_ITEM_DETAILS, props);

	const {
		components,
		labels,
		icons,
		root,
		isExpanded,
		toggleExpanded,
		getFirstSelected,
		isNodeSelected,
		getSelection,
		toggleSelected,
		setSelection,
	} = useTreeList();

	const isItemExpanded = () => Boolean(locals.expand || isExpanded(locals.node.id));
	const selected = () => isNodeSelected(locals.node.object.id);
	const level = () => locals.level ?? 1;
	const hasChildren = () => locals.node.children.length > 0;
	const hasToggle = () => Boolean(!locals.expand && hasChildren() && locals.level);
	const showSelection = () => getSelection().length > 1;

	const selectNode = (node: TreeNode) => {
		setSelection([node.object]);
	};

	const handleItemPress = (ev: Event) => {
		const event = ev as MouseEvent;
		ev.stopImmediatePropagation();
		if (!event.altKey && !event.shiftKey && hasToggle()) {
			toggleExpanded(locals.node.id);
		}
		selectNode(locals.node);
	};

	const selectNodesUntil = (node: TreeNode) => {
		const firstObject = getFirstSelected();
		if (firstObject) {
			const items = getTreeSelectionUntil(root(), firstObject, node.object);
			setSelection(items);
		} else {
			selectNode(node);
		}
	};

	const toggleNodeSelected = (node: TreeNode) => {
		toggleSelected(node.object);
	};

	const handleItemShiftPress = (ev: Event) => {
		ev.stopImmediatePropagation();
		selectNodesUntil(locals.node);
	};

	const handleItemAltPress = (ev: Event) => {
		ev.stopImmediatePropagation();
		toggleNodeSelected(locals.node);
	};

	const { $root: $extendedPressableRoot } = compose(
		createExtendedPressable({
			onShiftPress: handleItemShiftPress,
			onAltPress: handleItemAltPress,
		}),
	);

	const _focusable = {
		onPress: handleItemPress,
		labels: {
			region: labelValue(labels().details),
		},
	};

	const $root = computedProps({
		'data-tree-item-id': () => locals.node.id,
		'data-tree-item-is-expandable': () => dataBoolean(hasToggle()),
		'data-tree-item-is-selected': () => dataBoolean(showSelection() && selected()),
		'data-tree-item-is-parent-selected': () =>
			dataBoolean(showSelection() && !!locals.parentSelected),
	});

	const handleExpandPress = (ev: Event) => {
		ev.stopImmediatePropagation();
		toggleExpanded(locals.node.id);
	};

	const expandButtonStaticProps = {
		onPress: handleExpandPress,
	};
	const _buttonExpand = computedProps(expandButtonStaticProps, {
		controls: () => `tree-list-node-${locals.node.id}`,
		component: () => components().expandButton,
		expanded: isItemExpanded,
		labels: () => ({
			expanded: labelValue(labels().expanded, locals.node),
			collapsed: labelValue(labels().collapsed, locals.node),
		}),
		icons,
	});

	const _treeListItemContents = computedProps({
		component: () => locals.node.component ?? components().itemContents,
		node: () => locals.node,
		level,
		parent: () => locals.parent,
		expanded: isItemExpanded,
		selected: () => isNodeSelected(locals.node.id),
		parentSelected: () => locals.parentSelected,
	});

	return exposeAPI(expose, '$root', {
		$root,
		_focusable: combineProps(_focusable, $extendedPressableRoot),
		_buttonExpand,
		_treeListItemContents,
		hasToggle,
	});
};

import { createAriaTreeItem } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, labelValue } from '@no-comply/solid-primitives';

import { useTreeList } from '../../providers';

import { $TREE_LIST_ITEM } from './constants';
import type { TreeListItemAPI, TreeListItemProps } from './types';

export const createTreeListItem = (props: TreeListItemProps): TreeListItemAPI => {
	const [locals, expose] = createExposable($TREE_LIST_ITEM, props);

	const { components, labels, isExpanded, isNodeSelected } = useTreeList();

	const expanded = () => Boolean(locals.expand || isExpanded(locals.node.id));
	const selected = () => isNodeSelected(locals.node.object.id);
	const level = () => locals.level ?? 1;
	const setSize = () => locals.setSize ?? 1;
	const posInSet = () => locals.posInSet ?? 1;

	const ariaTreeItemProps = computedProps({
		label: () => labelValue(labels().item, locals.node),
		selected,
		expanded,
		level,
		setSize,
		posInSet,
	});
	const { $root: $treeItemRoot } = createAriaTreeItem(ariaTreeItemProps);

	const $root = {
		component: 'div' as const,
	};

	const _treeListItemDetails = computedProps({
		component: () => components().itemDetails,
		node: () => locals.node,
		expand: () => locals.expand,
		level,
		parent: () => locals.parent,
		parentSelected: () => Boolean(locals.parentSelected),
	});

	const expandChildren = () => {
		const expand = locals.expand;
		return typeof expand === 'number' && expand ? expand - 1 : expand;
	};

	const _treeListItemChildren = computedProps({
		component: () => components().itemChildren,
		node: () => locals.node,
		expand: () => expandChildren(),
		level: () => level(),
		setSize: () => setSize(),
		parent: () => locals.parent,
		parentSelected: () => locals.parentSelected || selected(),
	});

	return exposeAPI(expose, '$root', {
		$root: combineProps($treeItemRoot, $root),
		_treeListItemDetails,
		_treeListItemChildren,
		isExpanded: expanded,
	});
};

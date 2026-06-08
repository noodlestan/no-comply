import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

import type { TreeListContext } from '../../contexts';
import type { TreeNode } from '../../types';

import { $TREE_LIST_KEYBOARD } from './constants';
import type { TreeListKeyboardControllerAPI } from './types';

export const createTreeListKeyboardController = (
	root: Accessor<TreeNode>,
	context: TreeListContext,
): TreeListKeyboardControllerAPI => {
	const [, expose] = createExposable($TREE_LIST_KEYBOARD);

	let containerEl: HTMLElement;

	const setContainerRef = (el: HTMLElement) => {
		containerEl = el;
	};

	const getFocusableNodes = (): HTMLElement[] => {
		if (!containerEl) {
			return [];
		}
		return Array.from(containerEl.querySelectorAll('[data-tree-item-id]')) as HTMLElement[];
	};

	const getFocusedNode = (): HTMLElement | undefined => {
		const nodes = getFocusableNodes();
		return nodes.find(node => node.contains(document.activeElement));
	};

	const focusElement = (element: HTMLElement) => {
		element.focus();
	};

	const findParentToCollapse = (node: TreeNode, id: string): string | undefined => {
		for (const child of node.children ?? []) {
			if (child.children?.find(child => child.id === id)) {
				return child.id;
			}
			const parent = findParentToCollapse(child, id);
			if (parent) {
				return parent;
			}
		}
		return undefined;
	};

	const focusNode = (nodes: HTMLElement[], id: string) => {
		const parentElement = nodes.find(node => node.getAttribute('data-tree-item-id') === id);
		if (parentElement) focusElement(parentElement);
	};

	const onKeyDown = (ev: KeyboardEvent) => {
		const focusedNode = getFocusedNode();
		if (!focusedNode) {
			return;
		}

		const currentId = focusedNode.getAttribute('data-tree-item-id');
		if (!currentId) {
			return;
		}

		const nodes = getFocusableNodes();
		const nodeIndex = nodes.indexOf(focusedNode);

		switch (ev.key) {
			case 'ArrowUp': {
				ev.stopImmediatePropagation();
				ev.preventDefault();
				const prevNode = nodes[Math.max(0, nodeIndex - 1)];
				if (prevNode) {
					focusElement(prevNode);
				}
				break;
			}
			case 'ArrowDown': {
				ev.stopImmediatePropagation();
				ev.preventDefault();
				const nextNode = nodes[Math.min(nodes.length - 1, nodeIndex + 1)];
				if (nextNode) {
					focusElement(nextNode);
				}
				break;
			}
			case 'ArrowLeft': {
				ev.stopImmediatePropagation();
				ev.preventDefault();
				const isExpandable = focusedNode.getAttribute('data-tree-item-is-expandable') === 'true';
				if (isExpandable && context.isExpanded(currentId)) {
					context.collapse(currentId);
					return;
				}
				const parentId = findParentToCollapse(root(), currentId);
				if (parentId) {
					context.collapse(parentId);
					focusNode(nodes, parentId);
				}
				break;
			}
			case 'ArrowRight': {
				ev.stopImmediatePropagation();
				ev.preventDefault();
				const isExpandable = focusedNode.getAttribute('data-tree-item-is-expandable') === 'true';
				if (isExpandable) {
					context.expand(currentId);
				}
				break;
			}
			default:
				break;
		}
	};

	const $root = {
		onKeyDown,
		ref: setContainerRef,
	};

	return exposeAPI(expose, '$root', {
		$root,
	});
};

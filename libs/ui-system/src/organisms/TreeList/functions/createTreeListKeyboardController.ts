import type { Accessor } from 'solid-js';

import type { TreeListKeyboardControllerAPI, TreeNode, TreeState } from '../types';

export function createTreeListKeyboardController(
    treeElement: Accessor<Element | undefined>,
    root: Accessor<TreeNode>,
    state: TreeState,
): TreeListKeyboardControllerAPI {
    const getFocusableNodes = (): HTMLElement[] => {
        const container = treeElement();
        if (!container) {
            return [];
        }
        return Array.from(container.querySelectorAll('[data-node-id]')) as HTMLElement[];
    };

    const getFocusedNode = (): HTMLElement | undefined => {
        const nodes = getFocusableNodes();
        return nodes.find(node => node.contains(document.activeElement));
    };

    const focusElement = (element: HTMLElement) => {
        element.focus();
    };

    const findParentToCollapse = (node: TreeNode, id: string): string | undefined => {
        for (const child of node.children || []) {
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
        const parentElement = nodes.find(node => node.getAttribute('data-node-id') === id);
        if (parentElement) focusElement(parentElement);
    };

    const onKeyUp = (ev: KeyboardEvent) => {
        const focusedNode = getFocusedNode();
        if (!focusedNode) return;

        const currentId = focusedNode.getAttribute('data-node-id');
        if (!currentId) return;

        const nodes = getFocusableNodes();
        const nodeIndex = nodes.indexOf(focusedNode);

        switch (ev.key) {
            case 'ArrowUp': {
                const prevNode = nodes[Math.max(0, nodeIndex - 1)];
                if (prevNode) {
                    focusElement(prevNode);
                }
                break;
            }
            case 'ArrowDown': {
                const nextNode = nodes[Math.min(nodes.length - 1, nodeIndex + 1)];
                if (nextNode) {
                    focusElement(nextNode);
                }
                break;
            }
            case 'ArrowLeft': {
                const id = focusedNode.getAttribute('data-node-id') || '';
                const isExpandable = focusedNode.getAttribute('data-is-expandable') === 'true';
                if (isExpandable && state.isExpanded(id)) {
                    state.collapse(currentId);
                    return;
                }
                const parentId = findParentToCollapse(root(), currentId);
                if (parentId) {
                    state.collapse(parentId);
                    focusNode(nodes, parentId);
                }
                break;
            }
            case 'ArrowRight': {
                const isExpandable = focusedNode.getAttribute('data-is-expandable') === 'true';
                if (isExpandable) {
                    state.expand(currentId);
                }
                break;
            }
            default:
                break;
        }
    };

    return {
        handlers: {
            onKeyUp,
        },
    };
}

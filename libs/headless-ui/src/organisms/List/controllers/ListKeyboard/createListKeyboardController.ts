import type { ListKeyboardControllerAPI } from './types';

export const createListKeyboardController = (): ListKeyboardControllerAPI => {
    let containerEl: HTMLElement;

    const setContainerRef = (el: HTMLElement) => {
        containerEl = el;
    };

    const getFocusableNodes = (): HTMLElement[] => {
        if (!containerEl) {
            return [];
        }
        return Array.from(containerEl.querySelectorAll('[data-item-id]')) as HTMLElement[];
    };

    const getFocusedNode = (): HTMLElement | undefined => {
        const nodes = getFocusableNodes();
        return nodes.find(node => node.contains(document.activeElement));
    };

    const focusElement = (element: HTMLElement) => {
        element.focus();
    };

    const onKeyDown = (ev: KeyboardEvent) => {
        const focusedNode = getFocusedNode();
        if (!focusedNode) return;

        const currentId = focusedNode.getAttribute('data-item-id');
        if (!currentId) return;

        const focusableNodes = getFocusableNodes();
        const currentIndex = focusableNodes.indexOf(focusedNode);

        switch (ev.key) {
            case 'ArrowUp': {
                const prevNode = focusableNodes[Math.max(0, currentIndex - 1)];
                if (!prevNode) {
                    return;
                }
                focusElement(prevNode);
                break;
            }
            case 'ArrowDown': {
                const nextNode =
                    focusableNodes[Math.min(focusableNodes.length - 1, currentIndex + 1)];
                if (!nextNode) {
                    return;
                }
                focusElement(nextNode);
                break;
            }

            default:
                break;
        }
    };

    const $localRoot = {
        onKeyDown,
        ref: setContainerRef,
    };

    return {
        $root: $localRoot,
    };
};

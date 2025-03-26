import type { FocusableProps } from '../../../../../../../focus';
import { l } from '../../../../../../../labels';
import { getTreeSelectionUntil } from '../../../../../helpers';
import { useTreeListContext } from '../../../../../providers';
import type { TreeItemComponent, TreeItemComponentProps, TreeNode } from '../../../../../types';
import type { TreeListExpandButtonProps } from '../../TreeListExpandButton';

import type { TreeListItemDetailsAPI, TreeListItemDetailsOptions } from './types';

export const createTreeListItemDetails = (
    options: TreeListItemDetailsOptions,
): TreeListItemDetailsAPI => {
    const { state, root, labels, component } = useTreeListContext();
    const {
        toggleExpanded,
        getFirstSelected,
        isSelected,
        getSelection,
        toggleSelected,
        setSelection,
    } = state;
    const { node } = options;

    const expanded = () => Boolean(options.expand() || state.isExpanded(node().id));
    const selected = () => isSelected(node().object.id);
    const level = () => options.level() || 1;
    const hasChildren = () => {
        const children = node().children;
        Boolean(children && children.length > 0);
    };
    const hasToggle = () => Boolean(!options.expand() && hasChildren() && options.level());
    const showSelection = () => getSelection().length > 1;

    const selectNode = (node: TreeNode) => {
        setSelection([node.object]);
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

    const handleItemClick = (ev: Event) => {
        const event = ev as MouseEvent;
        ev.stopImmediatePropagation();
        if (!event.altKey && !event.shiftKey) {
            toggleExpanded(node().id);
        }
        selectNode(node());
    };

    const handleItemShiftClick = (ev: Event) => {
        ev.stopImmediatePropagation();
        selectNodesUntil(node());
    };

    const handleItemAltClick = (ev: Event) => {
        ev.stopImmediatePropagation();
        toggleNodeSelected(node());
    };

    const focusableProps = (): FocusableProps => ({
        onClick: handleItemClick,
        onShiftClick: handleItemShiftClick,
        onAltClick: handleItemAltClick,
        labels: {
            region: l(labels.details),
        },
    });

    const handleExpandClick = (ev: Event) => {
        ev.stopImmediatePropagation();
        toggleExpanded(node().id);
    };

    const expandButtonProps = (): TreeListExpandButtonProps => ({
        node: node(),
        onClick: handleExpandClick,
        isExpanded: expanded(),
    });

    const componentProps = (): TreeItemComponentProps & { component: TreeItemComponent } => ({
        component: node().component || component,
        state,
        node: node(),
        level: level(),
        parent: options.parent(),
        isExpanded: expanded(),
        isSelected: isSelected(node().id),
        isParentSelected: options.isParentSelected(),
    });

    return {
        focusableProps,
        expandButtonProps,
        componentProps,
        isExpanded: expanded,
        isSelected: selected,
        showSelection,
        hasToggle,
    };
};

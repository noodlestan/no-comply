import { l } from '@noodlestan/context-ui';
import { createComputedProps, mergeProps, staticClassList } from '@noodlestan/context-ui-types';

import { createExtendedPressable } from '../../../../../../actions';
import { getTreeSelectionUntil } from '../../../../helpers';
import { useTreeListContext } from '../../../../providers';
import type { TreeNode } from '../../../../types';

import styles from './TreeListItemDetails.module.css';
import type { TreeListItemDetailsAPI, TreeListItemDetailsProps } from './types';

export const createTreeListItemDetails = (
    props: TreeListItemDetailsProps,
): TreeListItemDetailsAPI => {
    const { state, root, labels, icons, components } = useTreeListContext();
    const {
        toggleExpanded,
        getFirstSelected,
        isSelected,
        getSelection,
        toggleSelected,
        setSelection,
    } = state;

    const isExpanded = () => Boolean(props.expand || state.isExpanded(props.node.id));
    const selected = () => isSelected(props.node.object.id);
    const level = () => props.level ?? 1;
    const hasChildren = () => {
        const children = props.node.children;
        return Boolean(children && children.length > 0);
    };
    const hasToggle = () => Boolean(!props.expand && hasChildren() && props.level);
    const showSelection = () => getSelection().length > 1;

    const staticProps = {
        classList: staticClassList(styles, 'TreeListItemDetails'),
    };
    const containerProps = createComputedProps(staticProps, {
        'data-tree-item-id': () => props.node.id,
        'data-tree-item-is-expandable': () => (hasToggle() ? '' : undefined),
        'data-tree-item-is-selected': () => (showSelection() && selected() ? '' : undefined),
        'data-tree-item-is-parent-selected': () =>
            showSelection() && !!props.isParentSelected ? '' : undefined,
    });

    const selectNode = (node: TreeNode) => {
        setSelection([node.object]);
    };

    const handleItemPress = (ev: Event) => {
        const event = ev as MouseEvent;
        ev.stopImmediatePropagation();
        if (!event.altKey && !event.shiftKey && hasToggle()) {
            toggleExpanded(props.node.id);
        }
        selectNode(props.node);
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
        selectNodesUntil(props.node);
    };
    const handleItemAltPress = (ev: Event) => {
        ev.stopImmediatePropagation();
        toggleNodeSelected(props.node);
    };
    const extendedPressable = createExtendedPressable({
        onShiftPress: handleItemShiftPress,
        onAltPress: handleItemAltPress,
    });

    const focusableStaticProps = {
        onPress: handleItemPress,
        labels: {
            region: l(labels.details),
        },
        classList: staticClassList(styles, 'TreeListItemDetails--focusable'),
    };
    const focusableComputedProps = createComputedProps(focusableStaticProps, {});
    const focusableProps = mergeProps(extendedPressable, focusableComputedProps);

    const handleExpandPress = (ev: Event) => {
        ev.stopImmediatePropagation();
        toggleExpanded(props.node.id);
    };
    const expandButtonStaticProps = {
        component: components.expandButton,
        onPress: handleExpandPress,
        icons,
    };
    const expandButtonProps = createComputedProps(expandButtonStaticProps, {
        expanded: isExpanded,
        labels: () => ({
            expand: l(labels.expand, props.node),
            collapse: l(labels.collapse, props.node),
        }),
    });
    const componentStaticProps = {
        state,
    };
    const componentProps = createComputedProps(componentStaticProps, {
        component: () => props.node.component ?? components.treeItem,
        node: () => props.node,
        level,
        parent: () => props.parent,
        isExpanded,
        isSelected: () => isSelected(props.node.id),
        isParentSelected: () => props.isParentSelected,
    });

    return {
        containerProps,
        focusableProps,
        expandButtonProps,
        componentProps,
        hasToggle,
    };
};

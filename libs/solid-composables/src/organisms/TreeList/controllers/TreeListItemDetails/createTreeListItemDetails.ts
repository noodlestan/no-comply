import { l } from '@no-comply/solid-contexts';
import { computedProps, mergeProps } from '@no-comply/solid-primitives';

import { createExtendedPressable } from '../../../../action';
import { getTreeSelectionUntil } from '../../helpers';
import { useTreeList } from '../../providers';
import type { TreeNode } from '../../types';

import type { TreeListItemDetailsAPI, TreeListItemDetailsProps } from './types';

export const createTreeListItemDetails = (
    props: TreeListItemDetailsProps,
): TreeListItemDetailsAPI => {
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

    const isItemExpanded = () => Boolean(props.expand || isExpanded(props.node.id));
    const selected = () => isNodeSelected(props.node.object.id);
    const level = () => props.level ?? 1;
    const hasChildren = () => props.node.children.length > 0;
    const hasToggle = () => Boolean(!props.expand && hasChildren() && props.level);
    const showSelection = () => getSelection().length > 1;

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
            region: l(labels().details),
        },
    };
    const focusableProps = mergeProps(focusableStaticProps, extendedPressable);

    const $root = computedProps({
        'data-tree-item-id': () => props.node.id,
        'data-tree-item-is-expandable': () => (hasToggle() ? '' : undefined),
        'data-tree-item-is-selected': () => (showSelection() && selected() ? '' : undefined),
        'data-tree-item-is-parent-selected': () =>
            showSelection() && !!props.parentSelected ? '' : undefined,
    });

    const handleExpandPress = (ev: Event) => {
        ev.stopImmediatePropagation();
        toggleExpanded(props.node.id);
    };

    const expandButtonStaticProps = {
        onPress: handleExpandPress,
    };
    const expandButtonProps = computedProps(expandButtonStaticProps, {
        controls: () => `tree-list-node-${props.node.id}`,
        component: () => components().expandButton,
        expanded: isItemExpanded,
        labels: () => ({
            expanded: l(labels().expanded, props.node),
            collapsed: l(labels().collapsed, props.node),
        }),
        icons,
    });

    const itemContentsProps = computedProps({
        component: () => props.node.component ?? components().itemContents,
        node: () => props.node,
        level,
        parent: () => props.parent,
        expanded: isItemExpanded,
        selected: () => isNodeSelected(props.node.id),
        parentSelected: () => props.parentSelected,
    });

    return {
        $root,
        focusableProps,
        expandButtonProps,
        itemContentsProps,
        hasToggle,
    };
};

import { createAriaGroup } from '@no-comply/solid-accessibility';
import { l } from '@no-comply/solid-contexts/src/labels';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { useTreeList } from '../../providers';

import type { TreeListItemChildrenAPI, TreeListItemChildrenProps } from './types';

export const createTreeListItemChildren = (
    props: TreeListItemChildrenProps,
): TreeListItemChildrenAPI => {
    const { components, labels, isExpanded } = useTreeList();

    const expanded = () => Boolean(props.expand || isExpanded(props.node.id));
    const setSize = () => props.node.children.length;
    const ariaTreeGroupProps = computedProps({
        label: () => l(labels().group, props.node),
        expanded,
        setSize,
    });
    const { $root: $groupRoot } = createAriaGroup(ariaTreeGroupProps);

    const $root = computedProps({
        id: () => `tree-list-node-${props.node.id}`,
        style: () => ({ '--tree-list-indent-level': props.level + 1 }),
    });

    const itemProps = computedProps({
        component: () => components().item,
        level: () => props.level + 1,
        setSize: () => props.node.children.length,
        parent: () => props.parent,
        parentSelected: () => props.parentSelected,
        expand: () => props.expand,
    });

    return {
        $root: combineProps($groupRoot, $root),
        itemProps,
    };
};

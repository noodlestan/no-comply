import { l } from '@noodlestan/context-ui/src/labels';
import { createAriaGroup } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import { useTreeList } from '../../providers';

import type { TreeListItemChildrenAPI, TreeListItemChildrenProps } from './types';

export const createTreeListItemChildren = (
    props: TreeListItemChildrenProps,
): TreeListItemChildrenAPI => {
    const { components, labels, isExpanded } = useTreeList();

    const expanded = () => Boolean(props.expand || isExpanded(props.node.id));
    const setSize = () => props.node.children.length;
    const ariaTreeGroupProps = createComputedProps({
        label: () => l(labels().group, props.node),
        expanded,
        setSize,
    });
    const { $root: $groupRoot } = createAriaGroup(ariaTreeGroupProps);

    const $localRoot = createComputedProps({
        style: () => ({ '--tree-list-indent-level': props.level + 1 }),
    });

    const itemProps = createComputedProps({
        component: () => components().item,
        level: () => props.level + 1,
        setSize: () => props.node.children.length,
        parent: () => props.parent,
        parentSelected: () => props.parentSelected,
        expand: () => props.expand,
    });

    return {
        $root: mergeProps($groupRoot, $localRoot),
        itemProps,
    };
};

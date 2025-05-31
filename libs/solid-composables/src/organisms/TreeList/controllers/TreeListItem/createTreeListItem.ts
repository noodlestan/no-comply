import { createAriaTreeItem } from '@no-comply/solid-accessibility';
import { l } from '@no-comply/solid-contexts/src/labels';
import { computedProps, mergeProps } from '@no-comply/solid-primitives';

import { useTreeList } from '../../providers';

import type { TreeListItemAPI, TreeListItemProps } from './types';

export const createTreeListItem = (props: TreeListItemProps): TreeListItemAPI => {
    const { components, labels, isExpanded, isNodeSelected } = useTreeList();

    const expanded = () => Boolean(props.expand || isExpanded(props.node.id));
    const selected = () => isNodeSelected(props.node.object.id);
    const level = () => props.level ?? 1;
    const setSize = () => props.setSize ?? 1;
    const posInSet = () => props.posInSet ?? 1;

    const ariaTreeItemProps = computedProps({
        label: () => l(labels().item, props.node),
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

    const detailsProps = computedProps({
        component: () => components().itemDetails,
        node: () => props.node,
        expand: () => props.expand,
        level,
        parent: () => props.parent,
        parentSelected: () => Boolean(props.parentSelected),
    });

    const childrenExpand = () => {
        const exp = props.expand;
        return typeof exp === 'number' && exp ? exp - 1 : exp;
    };

    const childrenProps = computedProps({
        component: () => components().itemChildren,
        node: () => props.node,
        expand: () => childrenExpand(),
        level: () => level(),
        setSize: () => setSize(),
        parent: () => props.parent,
        parentSelected: () => props.parentSelected || selected(),
    });

    return {
        $root: mergeProps($treeItemRoot, $root),
        detailsProps,
        childrenProps,
        isExpanded: expanded,
    };
};

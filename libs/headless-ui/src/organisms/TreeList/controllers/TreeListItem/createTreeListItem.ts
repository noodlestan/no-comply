import { l } from '@noodlestan/context-ui/src/labels';
import { createAriaTreeItem } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import { useTreeList } from '../../providers';

import type { TreeListItemAPI, TreeListItemProps } from './types';

export const createTreeListItem = (props: TreeListItemProps): TreeListItemAPI => {
    const { components, labels, isExpanded, isNodeSelected } = useTreeList();

    const expanded = () => Boolean(props.expand || isExpanded(props.node.id));
    const selected = () => isNodeSelected(props.node.object.id);
    const level = () => props.level ?? 1;
    const setSize = () => props.setSize ?? 1;
    const posInSet = () => props.posInSet ?? 1;

    const ariaTreeItemProps = createComputedProps({
        label: () => l(labels().item, props.node),
        selected,
        expanded,
        level,
        setSize,
        posInSet,
    });
    const { $root: $ariaTreeItemRoot } = createAriaTreeItem(ariaTreeItemProps);

    const $localRoot = {
        component: 'div' as const,
    };

    const detailsProps = createComputedProps({
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

    const childrenProps = createComputedProps({
        component: () => components().itemChildren,
        node: () => props.node,
        expand: () => childrenExpand(),
        level: () => level(),
        setSize: () => setSize(),
        parent: () => props.parent,
        parentSelected: () => props.parentSelected || selected(),
    });

    return {
        $root: mergeProps($ariaTreeItemRoot, $localRoot),
        detailsProps,
        childrenProps,
        isExpanded: expanded,
    };
};

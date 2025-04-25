import { l } from '@noodlestan/context-ui/src/labels';
import { createAriaTreeItem } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';

import { useTreeListContext } from '../../../../../providers';

import type { TreeListItemProps, TreeListNodeAPI } from './types';

export const createTreeListItem = (props: TreeListItemProps): TreeListNodeAPI => {
    const { state, labels } = useTreeListContext();
    const { isSelected } = state;

    const expanded = () => Boolean(props.expand || state.isExpanded(props.node.id));
    const selected = () => isSelected(props.node.object.id);
    const level = () => props.level ?? 1;
    const setSize = () => props.setSize ?? 1;
    const posInSet = () => props.posInSet ?? 1;

    const expandChildren = () => {
        const exp = props.expand;
        return typeof exp === 'number' && exp ? exp - 1 : exp;
    };

    const staticProps = {
        label: l(labels.item, props.node),
    };

    const ariaTreeItemProps = createComputedProps(staticProps, {
        selected,
        expanded,
        level,
        setSize,
        posInSet,
    });
    const ariaTreeItem = createAriaTreeItem(ariaTreeItemProps);

    const containerStaticProps = {
        component: 'div' as const,
    };
    const elProps = mergeProps(containerStaticProps, ariaTreeItem.elProps);

    const detailsProps = createComputedProps({
        node: () => props.node,
        expand: () => props.expand,
        level,
        parent: () => props.parent,
        isParentSelected: () => Boolean(props.isParentSelected),
    });

    const childrenProps = createComputedProps({
        node: () => props.node,
        expand: () => expandChildren(),
        level: () => level(),
        setSize: () => setSize(),
        parent: () => props.parent,
        isParentSelected: () => props.isParentSelected || selected(),
    });

    return {
        elProps,
        detailsProps,
        childrenProps,
        isExpanded: expanded,
    };
};

import { createAriaTreeItem } from '../../../../../../../aria';
import { l } from '../../../../../../../labels';
import { useTreeListContext } from '../../../../../providers';
import type { TreeListItemChildrenProps } from '../../TreeListItemChildren';
import type { TreeListItemDetailsProps } from '../../TreeListItemDetails';

import type { TreeListItemContainerProps, TreeListItemOptions, TreeListNodeAPI } from './types';

export const createTreeListItem = (options: TreeListItemOptions): TreeListNodeAPI => {
    const { state, labels } = useTreeListContext();
    const { isSelected } = state;
    const { node } = options;

    const expanded = () => Boolean(options.expand() || state.isExpanded(node().id));
    const selected = () => isSelected(node().object.id);
    const level = () => options.level() || 1;
    const setSize = () => options.setSize() || 1;
    const posInSet = () => options.posInSet() || 1;

    const ariaTreeItem = createAriaTreeItem({
        label: l(labels.item, node()),
        selected,
        expanded,
        level,
        setSize,
        posInSet,
    });

    const expandChildren = () => {
        const exp = options.expand();
        return typeof exp === 'number' && exp ? exp - 1 : exp;
    };

    const containerProps = (): TreeListItemContainerProps => ({
        ...ariaTreeItem.elProps(),
    });

    const detailsProps = (): TreeListItemDetailsProps => ({
        node: node(),
        expand: options.expand(),
        level: level(),
        parent: options.parent(),
        isParentSelected: Boolean(options.isParentSelected()),
    });

    const childrenProps = (): TreeListItemChildrenProps => ({
        node: node(),
        expand: expandChildren(),
        level: level(),
        setSize: setSize(),
        parent: node(),
        isParentSelected: options.isParentSelected() || selected(),
    });

    return {
        containerProps,
        detailsProps,
        childrenProps,
        isExpanded: expanded,
    };
};

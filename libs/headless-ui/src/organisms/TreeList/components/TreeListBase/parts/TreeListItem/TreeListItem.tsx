import { type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { TreeListItemChildren } from '../TreeListItemChildren';
import { TreeListItemDetails } from '../TreeListItemDetails';

import { type TreeListItemProps, createTreeListItem } from './private';

export const TreeListItem: Component<TreeListItemProps> = props => {
    const {
        elProps: containerProps,
        detailsProps,
        childrenProps,
        isExpanded,
    } = createTreeListItem(props);

    return (
        <Dynamic {...containerProps}>
            <TreeListItemDetails {...detailsProps} />
            {isExpanded() && props.node.children && <TreeListItemChildren {...childrenProps} />}
        </Dynamic>
    );
};

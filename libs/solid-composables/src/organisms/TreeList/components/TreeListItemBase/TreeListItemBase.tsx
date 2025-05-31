import { type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { type TreeListItemProps, createTreeListItem } from '../../controllers';

export const TreeListItemBase: Component<TreeListItemProps> = props => {
    const { $root, _treeListItemDetails, _treeListItemChildren, isExpanded } =
        createTreeListItem(props);

    return (
        <Dynamic {...$root}>
            <Dynamic {..._treeListItemDetails} />
            {isExpanded() && props.node.children.length > 0 && (
                <Dynamic {..._treeListItemChildren} />
            )}
        </Dynamic>
    );
};

import { type Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { type TreeListItemProps, createTreeListItem } from '../../controllers';

export const TreeListItemBase: Component<TreeListItemProps> = props => {
    const { $root, detailsProps, childrenProps, isExpanded } = createTreeListItem(props);

    return (
        <Dynamic {...$root}>
            <Dynamic {...detailsProps} />
            {isExpanded() && props.node.children.length > 0 && <Dynamic {...childrenProps} />}
        </Dynamic>
    );
};

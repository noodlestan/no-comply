import type { Component } from 'solid-js';

import type { ExpandActionProps } from '../../../../action';
import type {
    TreeListAPI,
    TreeListItemChildrenProps,
    TreeListItemDetailsProps,
    TreeListItemProps,
    TreeListProps,
} from '../../controllers';
import type { TreeListItemContentsProps } from '../../types';

export type TreeListBaseProps = Omit<TreeListProps, 'components'> & {
    components: {
        item?: Component<TreeListItemProps>;
        itemDetails?: Component<TreeListItemDetailsProps>;
        itemChildren?: Component<TreeListItemChildrenProps>;
        itemContents: Component<TreeListItemContentsProps>;
        expandButton: Component<ExpandActionProps>;
    };
};

export type TreeListBaseAPI = TreeListAPI;

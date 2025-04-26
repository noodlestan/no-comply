import type { Component } from 'solid-js';

import type { ExpandButtonProps } from '../../../../actions';
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
        expandButton: Component<ExpandButtonProps>;
    };
};

export type TreeListBaseAPI = TreeListAPI;

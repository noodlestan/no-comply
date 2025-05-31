import type { Component } from 'solid-js';

import type { ListAPI, ListItemProps, ListProps } from '../../controllers';
import type { ListItemContentsProps } from '../../types';

export type ListBaseProps = Omit<ListProps, 'components'> & {
    components: {
        item?: Component<ListItemProps>;
        itemContents: Component<ListItemContentsProps>;
    };
};

export type ListBaseAPI = Omit<ListAPI, '$root'> & {
    $root: ListAPI['$root'];
};

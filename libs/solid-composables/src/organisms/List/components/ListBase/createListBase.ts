import { combineProps, computedProps } from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import { createList } from '../../controllers';
import { ListItemBase } from '../ListItemBase';

import type { ListBaseAPI, ListBaseProps } from './types';

export const createListBase = (props: ListBaseProps): ListBaseAPI => {
    const [, others] = splitProps(props, ['components']);
    const components = () => ({
        item: props.components.item ?? ListItemBase,
        itemContents: props.components.itemContents,
    });
    const treeListProps = computedProps({
        components,
    });
    return createList(combineProps(others, treeListProps));
};

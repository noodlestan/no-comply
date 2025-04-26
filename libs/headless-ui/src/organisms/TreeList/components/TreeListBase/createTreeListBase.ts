import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { splitProps } from 'solid-js';

import { createTreeList } from '../../controllers';
import { TreeListItemBase } from '../TreeListItemBase';
import { TreeListItemChildrenBase } from '../TreeListItemChildrenBase';
import { TreeListItemDetailsBase } from '../TreeListItemDetailsBase';

import type { TreeListBaseAPI, TreeListBaseProps } from './types';

export const createTreeListBase = (props: TreeListBaseProps): TreeListBaseAPI => {
    const [, others] = splitProps(props, ['components']);
    const components = () => ({
        item: props.components.item ?? TreeListItemBase,
        itemDetails: props.components.itemDetails ?? TreeListItemDetailsBase,
        itemChildren: props.components.itemChildren ?? TreeListItemChildrenBase,
        itemContents: props.components.itemContents,
        expandButton: props.components.expandButton,
    });
    const treeListProps = createComputedProps({
        components,
    });
    return createTreeList(mergeProps(others, treeListProps));
};

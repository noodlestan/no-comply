import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import { createTreeList } from '../../controllers';
import { TreeListItemBase } from '../TreeListItemBase';
import { TreeListItemChildrenBase } from '../TreeListItemChildrenBase';
import { TreeListItemDetailsBase } from '../TreeListItemDetailsBase';

import { $TREE_LIST_BASE } from './constants';
import type { TreeListBaseAPI, TreeListBaseProps } from './types';

export const createTreeListBase = (props: TreeListBaseProps): TreeListBaseAPI => {
    const [locals, expose, compose] = createExposable($TREE_LIST_BASE, props);

    const [, others] = splitProps(locals, ['components']);
    const components = () => ({
        item: locals.components.item ?? TreeListItemBase,
        itemDetails: locals.components.itemDetails ?? TreeListItemDetailsBase,
        itemChildren: locals.components.itemChildren ?? TreeListItemChildrenBase,
        itemContents: locals.components.itemContents,
        expandButton: locals.components.expandButton,
    });
    const treeListProps = computedProps({
        components,
    });
    const { $root: $treeListRoot, ...rest } = compose(
        createTreeList(combineProps(others, treeListProps)),
    );

    return exposeAPI(expose, '$root', {
        ...rest,
        $root: $treeListRoot,
    });
};

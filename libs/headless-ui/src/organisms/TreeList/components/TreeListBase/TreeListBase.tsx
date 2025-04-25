import type { Component } from 'solid-js';

import { TreeListContextProvider } from '../../providers';

import { createTreeList } from './createTreeList';
import { TreeListItem } from './parts';
import type { TreeListBaseProps } from './types';

export const TreeListBase: Component<TreeListBaseProps> = props => {
    const classList = () => ({
        ...props.classList,
        TreeList: true,
    });

    const treeList = createTreeList(props);

    return (
        <TreeListContextProvider context={props.tree}>
            <div classList={classList()} {...treeList.containerProps}>
                <TreeListItem node={props.tree.root()} expand={treeList.expand()} />
            </div>
        </TreeListContextProvider>
    );
};

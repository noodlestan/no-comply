import type { Component } from 'solid-js';

import type { ClassList } from '../../../../dom';
import { Tag } from '../../../../layouts';
import { createTreeList } from '../../controllers';
import type { TreeListContextValue } from '../../private';
import { TreeListContextProvider } from '../../providers';

import { TreeListNode } from './parts';

export type TreeListProps = {
    tree: TreeListContextValue;
    classList?: ClassList;
};

export const TreeList: Component<TreeListProps> = props => {
    const classList = () => ({
        ...props.classList,
        TreeList: true,
    });

    // eslint-disable-next-line solid/reactivity
    const treeList = createTreeList(props.tree);

    return (
        // eslint-disable-next-line solid/reactivity
        <TreeListContextProvider value={props.tree}>
            <Tag classList={classList()} {...treeList.containerProps()}>
                <TreeListNode node={props.tree.root()} expand={treeList.expand()} />
            </Tag>
        </TreeListContextProvider>
    );
};

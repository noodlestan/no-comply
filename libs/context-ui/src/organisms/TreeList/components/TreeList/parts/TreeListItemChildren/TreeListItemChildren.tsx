import { type Component, For } from 'solid-js';

import { createSignalsFromProps } from '../../../../../../private';
import type { TreeNode } from '../../../../types';
import { TreeListNode } from '../TreeListItem';

import { createTreeListChildren } from './private';

export type TreeListItemChildrenProps = {
    node: TreeNode;
    expand?: boolean | number;
    level: number;
    setSize: number;
    parent: TreeNode;
    isParentSelected: boolean;
};

export const TreeListItemChildren: Component<TreeListItemChildrenProps> = props => {
    const treeListChildren = createTreeListChildren({
        ...createSignalsFromProps(props, ['node', 'expand', 'level']),
    });

    return (
        <div {...treeListChildren.containerProps()}>
            <For each={props.node.children}>
                {(child, index) => (
                    <TreeListNode
                        node={child}
                        level={props.level + 1}
                        setSize={props.node.children?.length}
                        posInSet={index() + 1}
                        parent={props.parent}
                        isParentSelected={props.isParentSelected}
                        expand={props.expand}
                    />
                )}
            </For>
        </div>
    );
};

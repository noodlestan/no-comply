import { mergeProps } from '@noodlestan/context-ui-primitives';
import { type Component, For } from 'solid-js';

import type { TreeNode } from '../../../../types';
import { TreeListItem } from '../TreeListItem';

import { createTreeListChildren } from './private';

export type TreeListItemChildrenProps = {
    node: TreeNode;
    expand?: boolean | number;
    level: number;
    setSize: number;
    parent?: TreeNode;
    isParentSelected: boolean;
};

export const TreeListItemChildren: Component<TreeListItemChildrenProps> = props => {
    const childrenProps = mergeProps(props, {
        expand: () => props.expand,
    });
    const treeListChildren = createTreeListChildren(childrenProps);

    return (
        <div {...treeListChildren.elProps()}>
            <For each={props.node.children}>
                {(child, index) => (
                    <TreeListItem
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

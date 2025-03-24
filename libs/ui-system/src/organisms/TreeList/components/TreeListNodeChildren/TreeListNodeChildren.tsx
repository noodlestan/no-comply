import { type Component, For } from 'solid-js';

import type { TreeNode, TreeNodeItemComponent, TreeState } from '../../types';
import { TreeListNode } from '../TreeListNode';

import './TreeListNodeChildren.css';

type TreeListNodeChildrenProps = {
    children: TreeNode[];
    state: TreeState;
    root: TreeNode;
    level: number;
    parent: TreeNode;
    isParentSelected: boolean;
    expand?: boolean | number;
    component: TreeNodeItemComponent | undefined;
};

export const TreeListNodeChildren: Component<TreeListNodeChildrenProps> = props => {
    const classList = () => ({
        TreeListNodeChildren: true,
    });

    const style = () => ({ '--tree-list-indent-level': props.level + 1 });

    return (
        <div classList={classList()} style={style()}>
            <For each={props.children}>
                {child => (
                    <TreeListNode
                        node={child}
                        state={props.state}
                        root={props.root}
                        level={props.level + 1}
                        parent={props.parent}
                        isParentSelected={props.isParentSelected}
                        expand={props.expand}
                        component={props.component}
                    />
                )}
            </For>
        </div>
    );
};

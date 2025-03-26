import { type Component, For } from 'solid-js';

import type { TreeNode } from '../../../../types';
import { TreeListNode } from '../TreeListItem';

export type TreeListItemChildrenProps = {
    children: TreeNode[];
    expand?: boolean | number;
    level: number;
    parent: TreeNode;
    isParentSelected: boolean;
};

export const TreeListItemChildren: Component<TreeListItemChildrenProps> = props => {
    const classList = () => ({
        TreeListItemChildren: true,
    });

    const style = () => ({ '--tree-list-indent-level': props.level + 1 });

    return (
        <div classList={classList()} style={style()}>
            <For each={props.children}>
                {(child, index) => (
                    <TreeListNode
                        node={child}
                        level={props.level + 1}
                        setSize={props.children.length}
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

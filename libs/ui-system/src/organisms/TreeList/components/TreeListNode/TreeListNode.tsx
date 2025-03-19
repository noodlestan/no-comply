import { Component } from 'solid-js';

import { isFolderItem } from '../../helpers';
import { TreeNode, TreeNodeItemComponent, TreeState } from '../../types';
import { TreeListNodeChildren } from '../TreeListNodeChildren';
import { TreeListNodeItem } from '../TreeListNodeItem';

import './TreeListNode.css';

type TreeListNodeProps = {
    node: TreeNode;
    state: TreeState;
    root?: TreeNode;
    level?: number;
    parent?: TreeNode;
    isParentSelected?: boolean;
    component?: TreeNodeItemComponent | undefined;
};

export const TreeListNode: Component<TreeListNodeProps> = props => {
    // eslint-disable-next-line solid/reactivity
    const { isSelected } = props.state;

    const isFolder = () => isFolderItem(props.node.object);
    const isNodeSelected = () => isSelected(props.node.object.id);
    const isExpanded = () => props.state.expanded.has(props.node.id);

    const classList = () => ({
        TreeListNode: true,
        'TreeListNode-is-selected': isNodeSelected(),
        'TreeListNode-is-parent-selected': props.isParentSelected,
        'TreeListNode-is-expanded': isExpanded(),
        'TreeListNode-is-folder': isFolder(),
    });

    return (
        <div classList={classList()}>
            <TreeListNodeItem
                node={props.node}
                state={props.state}
                root={props.root || props.node}
                level={props.level}
                parent={props.parent}
                isParentSelected={props.isParentSelected}
                component={props.component}
            />
            {isExpanded() && props.node.children && (
                <TreeListNodeChildren
                    children={props.node.children}
                    state={props.state}
                    root={props.root || props.node}
                    level={props.level || 0}
                    parent={props.node}
                    isParentSelected={props.isParentSelected || isNodeSelected()}
                    component={props.component}
                />
            )}
        </div>
    );
};

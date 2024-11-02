import { Component } from 'solid-js';

import { TreeListNode } from './components';
import { createTreeListKeyboardController } from './functions/';
import { TreeNode, TreeNodeItemComponent, TreeState } from './types';

import './TreeList.css';

type TreeListProps = {
    root: TreeNode;
    state: TreeState;
    component?: TreeNodeItemComponent;
    classList?: { [key: string]: boolean };
};

export const TreeList: Component<TreeListProps> = props => {
    let treeListRef: HTMLDivElement | undefined;

    const classList = () => ({
        ...props.classList,
        TreeList: true,
    });

    const { handlers } = createTreeListKeyboardController(
        () => treeListRef,
        () => props.root,
        props.state,
    );

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div ref={treeListRef} classList={classList()} onKeyUp={handlers.onKeyUp}>
            <TreeListNode node={props.root} state={props.state} component={props.component} />
        </div>
    );
};

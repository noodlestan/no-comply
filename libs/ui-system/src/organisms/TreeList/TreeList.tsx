import type { Component } from 'solid-js';

import type { ClassList } from '../../dom';

import { TreeListNode } from './components';
import { createTreeListKeyboardController } from './functions';
import type { TreeNode, TreeNodeItemComponent, TreeState } from './types';

import './TreeList.css';

type TreeListProps = {
    root: TreeNode;
    state: TreeState;
    expand?: boolean | number;
    component?: TreeNodeItemComponent;
    classList?: ClassList;
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
        // eslint-disable-next-line solid/reactivity
        props.state,
    );

    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div ref={treeListRef} classList={classList()} onKeyUp={handlers.onKeyUp}>
            <TreeListNode
                node={props.root}
                state={props.state}
                component={props.component}
                expand={props.expand}
            />
        </div>
    );
};

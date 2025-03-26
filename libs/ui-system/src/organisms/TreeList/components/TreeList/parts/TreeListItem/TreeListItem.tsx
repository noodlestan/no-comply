import { type Component } from 'solid-js';

import { Tag } from '../../../../../../layouts';
import { createSignalsFromProps } from '../../../../../../private';
import type { TreeNode } from '../../../../types';
import { TreeListItemChildren } from '../TreeListItemChildren';
import { TreeListItemDetails } from '../TreeListItemDetails';

import { createTreeListItem } from './private';

export type TreeListNodeProps = {
    node: TreeNode;
    expand?: boolean | number;
    level?: number;
    setSize?: number;
    posInSet?: number;
    parent?: TreeNode;
    isParentSelected?: boolean;
};

export const TreeListNode: Component<TreeListNodeProps> = props => {
    const treeItem = createTreeListItem({
        ...createSignalsFromProps(props, [
            'node',
            'expand',
            'level',
            'setSize',
            'posInSet',
            'parent',
            'isParentSelected',
        ]),
    });

    return (
        <Tag {...treeItem.containerProps()}>
            <TreeListItemDetails {...treeItem.detailsProps()} />
            {treeItem.isExpanded() && props.node.children && (
                <TreeListItemChildren {...treeItem.childrenProps()} />
            )}
        </Tag>
    );
};

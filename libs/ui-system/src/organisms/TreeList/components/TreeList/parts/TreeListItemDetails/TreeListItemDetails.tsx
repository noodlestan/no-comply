import { type Component, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Focusable } from '../../../../../../focus';
import { Flex } from '../../../../../../layouts';
import { createSignalsFromProps } from '../../../../../../private';
import type { TreeNode } from '../../../../types';
import { TreeListExpandButton } from '../TreeListExpandButton';

import { createTreeListItemDetails } from './private';

import './TreeListItemDetails.css';

export type TreeListItemDetailsProps = {
    node: TreeNode;
    expand: number | boolean | undefined;
    level: number;
    parent: TreeNode | undefined;
    isParentSelected: boolean;
};

export const TreeListItemDetails: Component<TreeListItemDetailsProps> = props => {
    const treeItemDetails = createTreeListItemDetails({
        ...createSignalsFromProps(props, ['node', 'expand', 'level', 'parent', 'isParentSelected']),
    });

    const { showSelection, isSelected, hasToggle } = treeItemDetails;

    const classList = () => ({
        TreeListItemDetails: true,
        'TreeListItemDetails-is-selected': showSelection() && isSelected(),
        'TreeListItemDetails-is-parent-selected': showSelection() && !!props.isParentSelected,
    });

    return (
        <Flex direction="row" align="center" classList={classList()}>
            <Focusable
                {...treeItemDetails.focusableProps()}
                classList={{ 'TreeListItemDetails--focusable': true }}
            >
                <Flex direction="row" align="center">
                    <Show when={hasToggle()}>
                        <div class="TreeListItemDetails--toggle">
                            <TreeListExpandButton {...treeItemDetails.expandButtonProps()} />
                        </div>
                    </Show>
                    <Flex stretch="width" classList={{ 'TreeListItemDetails--content': true }}>
                        <Dynamic {...treeItemDetails.componentProps()} />
                    </Flex>
                </Flex>
            </Focusable>
        </Flex>
    );
};

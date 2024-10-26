import { Component, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Flex, Focusable } from '../../../../layouts';
import { resolveFolderItemComponent, resolveNodeItemComponent } from '../../functions';
import { getTreeSelectionUntil, isFolderItem } from '../../helpers';
import { TreeNode, TreeNodeComponentProps, TreeNodeItemComponent, TreeState } from '../../types';
import { TreeListDefaultFolderComponent } from '../TreeListDefaultFolderComponent';
import { TreeListDefaultNodeComponent } from '../TreeListDefaultNodeComponent';
import { TreeListExpandButton } from '../TreeListExpandButton';

import './TreeListNodeItem.css';

type TreeListNodeItemProps = {
    node: TreeNode;
    state: TreeState;
    root: TreeNode;
    level?: number;
    parent?: TreeNode;
    isParentSelected?: boolean;
    component?: TreeNodeItemComponent | undefined;
    folderComponent?: TreeNodeItemComponent | undefined;
};

export const TreeListNodeItem: Component<TreeListNodeItemProps> = props => {
    const {
        isExpanded,
        toggleExpanded,
        getFirstSelected,
        isSelected,
        getSelection,
        toggleSelected,
        setSelection,
    } = props.state;

    const isFolder = () => isFolderItem(props.node.object);
    const hasChildren = () => Boolean(props.node.children && props.node.children.length > 0);
    const hasToggle = () => hasChildren() && !!props.level;
    const showSelection = () => getSelection().length > 1;

    const component = (cProps: TreeNodeComponentProps) => {
        return resolveNodeItemComponent(cProps, props.component, TreeListDefaultNodeComponent);
    };

    const folderComponent = (cProps: TreeNodeComponentProps) => {
        return resolveFolderItemComponent(
            cProps,
            props.folderComponent,
            TreeListDefaultFolderComponent,
        );
    };

    const selectNode = (node: TreeNode) => {
        setSelection([node.object]);
    };

    const selectNodesUntil = (node: TreeNode) => {
        const firstObject = getFirstSelected();
        if (firstObject) {
            const items = getTreeSelectionUntil(props.root, firstObject, node.object);
            setSelection(items);
        } else {
            selectNode(node);
        }
    };

    const toggleNodeSelected = (node: TreeNode) => {
        toggleSelected(node.object);
    };

    const handleExpandClick = (ev: Event) => {
        ev.stopPropagation();
        toggleExpanded(props.node.id);
    };

    const handleItemClick = (ev: Event) => {
        const event = ev as MouseEvent;
        ev.stopPropagation();
        if (isFolder() && !event.altKey && !event.shiftKey) {
            toggleExpanded(props.node.id);
        }
        selectNode(props.node);
    };

    const handleItemShiftClick = (ev: Event) => {
        ev.stopPropagation();
        selectNodesUntil(props.node);
    };

    const handleItemAltClick = (ev: Event) => {
        ev.stopPropagation();
        toggleNodeSelected(props.node);
    };

    const classList = () => ({
        TreeListNodeItem: true,
        'TreeListNodeItem-is-selected': showSelection() && isSelected(props.node.object.id),
        'TreeListNodeItem-is-parent-selected': showSelection() && !!props.isParentSelected,
    });

    const componentProps = () => ({
        state: props.state,
        node: props.node,
        level: props.level || 0,
        parent: props.parent,
        isFolder: isFolder(),
        isExpanded: isExpanded(props.node.id),
        isSelected: isSelected(props.node.id),
        isParentSelected: !!props.isParentSelected,
    });

    return (
        <Flex direction="row" classList={classList()} align="center">
            <Focusable
                label={''}
                variant="transparent"
                onClick={handleItemClick}
                onShiftClick={handleItemShiftClick}
                onAltClick={handleItemAltClick}
                classList={{ 'TreeListNodeItem--button': true }}
                data-node-id={props.node.id}
                data-is-expandable={Boolean(props.level && props.node.children?.length)}
            >
                <Flex direction="row" align="center" tag="span">
                    <Show when={hasToggle()}>
                        <div class="TreeListNodeItem--toggle">
                            <TreeListExpandButton
                                isExpanded={isExpanded(props.node.id)}
                                onClick={handleExpandClick}
                            />
                        </div>
                    </Show>
                    <div class="TreeListNodeItem--pill">
                        <Show when={isFolder() && props.level}>
                            <Dynamic
                                component={folderComponent(componentProps())}
                                {...componentProps()}
                            />
                        </Show>
                        <Show when={!isFolder() || !props.level}>
                            <Dynamic
                                component={component(componentProps())}
                                {...componentProps()}
                            />
                        </Show>
                    </div>
                </Flex>
            </Focusable>
        </Flex>
    );
};

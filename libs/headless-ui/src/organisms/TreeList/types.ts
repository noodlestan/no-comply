import type { IconValue, LabelValue } from '@noodlestan/context-ui';
import type { AriaTreeProps } from '@noodlestan/context-ui-aria';
import type { ObjectWithId } from '@noodlestan/context-ui-types';
import { type Component } from 'solid-js';

import type { PressableProps } from '../../actions';

import type { TreeState } from './controllers/TreeState';

export type TreeItem = ObjectWithId;

export type TreeNode = {
    id: string;
    object: TreeItem;
    children?: TreeNode[];
    component?: TreeItemComponent;
};

export type TreeItemComponentProps = {
    state: TreeState;
    node: TreeNode;
    level: number;
    parent?: TreeNode;
    isParentSelected: boolean;
    isExpanded: boolean;
    isSelected: boolean;
    onClick?: () => void;
};

export type TreeItemComponent = Component<TreeItemComponentProps>;

export type TreeRootNode = TreeNode;

export type TreeListProps = AriaTreeProps & {
    expand?: boolean | number;
    components: TreeListComponents;
    labels?: Partial<TreeListLabels>;
    icons?: Partial<TreeListIcons>;
};

export type TreeListExpandButtonProps = {
    onPress: PressableProps['onPress'];
    expanded: boolean;
    labels: Partial<ExpandButtonLabels>;
    icons: Partial<ExpandButtonIcons>;
};

export type ExpandButtonLabels = {
    expand: LabelValue;
    collapse: LabelValue;
};

export type ExpandButtonIcons = {
    expanded: IconValue;
    collapsed: IconValue;
};

type TreeListExpandButtonComponent = Component<TreeListExpandButtonProps>;

export type TreeListComponents = {
    treeItem: TreeItemComponent;
    expandButton: TreeListExpandButtonComponent;
};

export type TreeListLabels = {
    item: LabelValue<[TreeNode]>;
    group: LabelValue<[TreeNode]>;
    expand: LabelValue<[TreeNode]>;
    collapse: LabelValue<[TreeNode]>;
    select: LabelValue<[TreeNode]>;
    details: LabelValue;
};

export type TreeListIcons = {
    expanded: IconValue;
    collapsed: IconValue;
};

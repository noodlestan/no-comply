import { type Component } from 'solid-js';

import type { AriaTreeOptions } from '../../aria';
import type { ExpandButtonIcons } from '../../atoms';
import type { LabelValue } from '../../labels';
import type { MaybeAccessorOrValue } from '../../private';
import type { ObjectWithId } from '../../types';

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

export type TreeListOptions = AriaTreeOptions & {
    component: TreeItemComponent;
    expand?: MaybeAccessorOrValue<boolean | number>;
    labels?: Partial<TreeListLabels>;
    icons?: TreeListIcons;
};

export type TreeListLabels = {
    item: LabelValue<[TreeNode]>;
    expand: LabelValue<[TreeNode]>;
    collapse: LabelValue<[TreeNode]>;
    select: LabelValue<[TreeNode]>;
    details: LabelValue;
};

export type TreeListIcons = ExpandButtonIcons;

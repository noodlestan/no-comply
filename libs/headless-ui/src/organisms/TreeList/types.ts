import type { IconValue, LabelValue } from '@noodlestan/context-ui';
import type { ObjectWithId } from '@noodlestan/context-ui-primitives';
import { type Component } from 'solid-js';

import type { ExpandActionProps } from '../../actions';

import type {
    TreeListItemChildrenProps,
    TreeListItemDetailsProps,
    TreeListItemProps,
} from './controllers';

export type TreeItem = ObjectWithId;

export type TreeNode = {
    id: string;
    object: TreeItem;
    children: TreeNode[];
    component?: Component<TreeListItemContentsProps>;
};

export type TreeListItemContentsProps = {
    node: TreeNode;
    level: number;
    parent?: TreeNode;
    parentSelected: boolean;
    expanded: boolean;
    selected: boolean;
    onClick?: () => void;
};

export type TreeListComponents = {
    item: Component<TreeListItemProps>;
    itemDetails: Component<TreeListItemDetailsProps>;
    itemChildren: Component<TreeListItemChildrenProps>;
    itemContents: Component<TreeListItemContentsProps>;
    expandButton: Component<ExpandActionProps>;
};

export type TreeListLabels = {
    item: LabelValue<[TreeNode]>;
    group: LabelValue<[TreeNode]>;
    expanded: LabelValue<[TreeNode]>;
    collapsed: LabelValue<[TreeNode]>;
    select: LabelValue<[TreeNode]>;
    details: LabelValue;
};

export type TreeListIcons = {
    expanded: IconValue;
    collapsed: IconValue;
};

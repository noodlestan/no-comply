import { ReactiveSet } from '@solid-primitives/set';
import { Component } from 'solid-js';

import { ObjectWithId } from '../../types';

export type TreeState = {
    expanded: ReactiveSet<string>;
    isExpanded: (id: string) => boolean;
    expand: (id: string | string[]) => void;
    toggleExpanded: (id: string) => void;
    collapse: (id: string | string[]) => void;
    getSelection: () => ObjectWithId[];
    getFirstSelected: () => ObjectWithId | undefined;
    isSelected: (id: string) => boolean;
    select: (object: ObjectWithId) => void;
    toggleSelected: (object: ObjectWithId) => void;
    deselect: (id: string) => void;
    setSelection: (objects: ObjectWithId[]) => void;
    clearSelection: () => void;
    dispose: () => void;
};

export type TreeObject = ObjectWithId;

export type TreeFolder = {
    id: string;
    type: 'folder';
    name: string;
};

export type TreeItem = TreeFolder | TreeObject;

export type TreeNodeComponentProps = {
    state: TreeState;
    node: TreeNode;
    level: number;
    parent?: TreeNode;
    isParentSelected: boolean;
    isFolder: boolean;
    isExpanded: boolean;
    isSelected: boolean;
    onClick?: () => void;
};

export type TreeNodeItemComponentSolid = Component<TreeNodeComponentProps>;

export type TreeNodeItemComponentFn = (
    props: TreeNodeComponentProps,
    component?: TreeNodeItemComponent,
) => TreeNodeItemComponentSolid;

export type TreeNodeItemComponent = TreeNodeItemComponentFn | TreeNodeItemComponentSolid;

export type TreeNode = {
    id: string;
    object: TreeItem;
    children?: TreeNode[];
    component?: TreeNodeItemComponent;
};

export type Tree = TreeNode;

export type TreeListKeyboardControllerAPI = {
    handlers: {
        onKeyUp: (ev: KeyboardEvent) => void;
    };
};

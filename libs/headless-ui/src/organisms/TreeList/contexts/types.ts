import type { BaseContext, SelectionContext } from '@noodlestan/context-ui';
import type { ObjectWithId } from '@noodlestan/context-ui-primitives';
import type { ReactiveSet } from '@solid-primitives/set';
import type { Accessor } from 'solid-js';

import type { TreeListComponents, TreeListIcons, TreeListLabels, TreeNode } from '../types';

export type TreeListContextOptions = {
    root: TreeNode;
    components: TreeListComponents;
    labels: TreeListLabels;
    icons: TreeListIcons;
    disabled?: boolean;
    selected?: SelectionContext;
    expanded?: ReactiveSet<string>;
};

export type TreeListContext = BaseContext & {
    type: 'tree-list';
    components: Accessor<TreeListComponents>;
    labels: Accessor<TreeListLabels>;
    icons: Accessor<TreeListIcons>;
    root: Accessor<TreeNode>;
    isDisabled: Accessor<boolean>;
    isExpanded: (id: string) => boolean;
    expand: (id: string | string[]) => void;
    toggleExpanded: (id: string) => void;
    collapse: (id: string | string[]) => void;
    getSelection: () => ObjectWithId[];
    getFirstSelected: () => ObjectWithId | undefined;
    isNodeSelected: (id: string) => boolean;
    select: (object: ObjectWithId) => void;
    toggleSelected: (object: ObjectWithId) => void;
    deselect: (id: string) => void;
    setSelection: (objects: ObjectWithId[]) => void;
    clearSelection: () => void;
    dispose: () => void;
};

export type TreeListContextValue = [TreeListContext];

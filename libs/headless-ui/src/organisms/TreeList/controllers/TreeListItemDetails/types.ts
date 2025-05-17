import type { AriaLabelledProps } from '@noodlestan/context-ui-aria';
import type { PropsWithComponent } from '@noodlestan/context-ui-primitives';
import type { Accessor } from 'solid-js';

import type { ExpandActionProps } from '../../../../actions';
import type { FocusableBaseProps } from '../../../../focus';
import type { TreeListItemContentsProps, TreeNode } from '../../types';

export type TreeListItemDetailsProps = AriaLabelledProps & {
    node: TreeNode;
    expand: boolean | number | undefined;
    level: number;
    parent: TreeNode | undefined;
    parentSelected: boolean;
};

export type TreeListItemDetailsAPI = {
    $root: {
        'data-tree-item-id': string;
        'data-tree-item-is-expandable': '' | undefined;
        'data-tree-item-is-selected': '' | undefined;
        'data-tree-item-is-parent-selected': '' | undefined;
    };
    focusableProps: FocusableBaseProps;
    expandButtonProps: PropsWithComponent<ExpandActionProps>;
    itemContentsProps: PropsWithComponent<TreeListItemContentsProps>;
    hasToggle: Accessor<boolean>;
};

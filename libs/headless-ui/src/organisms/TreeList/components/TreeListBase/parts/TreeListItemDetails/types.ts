import type { AriaLabelledProps } from '@noodlestan/context-ui-aria';
import type { ClassList, ComponentAndProps } from '@noodlestan/context-ui-primitives';
import type { Accessor } from 'solid-js';

import type { FocusableBaseProps } from '../../../../../../focus';
import type {
    TreeItemComponentProps,
    TreeListExpandButtonProps,
    TreeNode,
} from '../../../../types';

export type TreeListItemDetailsProps = AriaLabelledProps & {
    node: TreeNode;
    expand: boolean | number | undefined;
    level: number;
    parent: TreeNode | undefined;
    isParentSelected: boolean;
};

export type TreeListItemDetailsAPI = {
    elProps: {
        classList: ClassList;
        'data-tree-item-id': string;
        'data-tree-item-is-expandable': '' | undefined;
        'data-tree-item-is-selected': '' | undefined;
        'data-tree-item-is-parent-selected': '' | undefined;
    };
    focusableProps: FocusableBaseProps;
    expandButtonProps: ComponentAndProps<TreeListExpandButtonProps>;
    componentProps: ComponentAndProps<TreeItemComponentProps>;
    hasToggle: Accessor<boolean>;
};

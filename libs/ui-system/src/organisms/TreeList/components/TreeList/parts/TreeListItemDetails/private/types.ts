import type { Accessor } from 'solid-js';

import type { AriaRegionOptions, AriaTreeItemProps } from '../../../../../../../aria';
import type { FocusableProps } from '../../../../../../../focus';
import type { ComponentAndProps } from '../../../../../../../private';
import type { TreeItemComponent, TreeItemComponentProps, TreeNode } from '../../../../../types';
import type { TreeListExpandButtonProps } from '../../TreeListExpandButton';

export type TreeListItemDetailsOptions = Pick<AriaRegionOptions, 'label' | 'labelledby'> & {
    node: Accessor<TreeNode>;
    expand: Accessor<boolean | number | undefined>;
    level: Accessor<number>;
    parent: Accessor<TreeNode | undefined>;
    isParentSelected: Accessor<boolean>;
};

export type TreeListItemContainerProps = AriaTreeItemProps;

export type TreeListItemDetailsAPI = {
    focusableProps: Accessor<FocusableProps>;
    expandButtonProps: Accessor<TreeListExpandButtonProps>;
    componentProps: Accessor<ComponentAndProps<TreeItemComponent, TreeItemComponentProps>>;
    isExpanded: Accessor<boolean>;
    isSelected: Accessor<boolean>;
    showSelection: Accessor<boolean>;
    hasToggle: Accessor<boolean>;
};

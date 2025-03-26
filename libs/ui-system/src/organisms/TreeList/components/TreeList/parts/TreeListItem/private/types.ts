import type { Accessor } from 'solid-js';

import type { AriaRegionOptions, AriaTreeItemProps } from '../../../../../../../aria';
import type { TreeNode } from '../../../../../types';
import type { TreeListItemChildrenProps } from '../../TreeListItemChildren';
import type { TreeListItemDetailsProps } from '../../TreeListItemDetails';

export type TreeListItemOptions = Pick<AriaRegionOptions, 'label' | 'labelledby'> & {
    node: Accessor<TreeNode>;
    expand: Accessor<boolean | number | undefined>;
    level: Accessor<number | undefined>;
    setSize: Accessor<number | undefined>;
    posInSet: Accessor<number | undefined>;
    parent: Accessor<TreeNode | undefined>;
    isParentSelected: Accessor<boolean | undefined>;
};

export type TreeListItemContainerProps = AriaTreeItemProps;

export type TreeListNodeAPI = {
    containerProps: Accessor<TreeListItemContainerProps>;
    detailsProps: Accessor<TreeListItemDetailsProps>;
    childrenProps: Accessor<TreeListItemChildrenProps>;
    isExpanded: Accessor<boolean>;
};

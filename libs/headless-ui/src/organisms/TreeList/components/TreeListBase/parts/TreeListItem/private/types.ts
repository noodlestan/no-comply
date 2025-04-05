import type { AriaLabelledProps, AriaTreeItemElementProps } from '@noodlestan/context-ui-aria';
import type { Accessor } from 'solid-js';

import type { TreeNode } from '../../../../../types';
import type { TreeListItemChildrenProps } from '../../TreeListItemChildren';
import type { TreeListItemDetailsProps } from '../../TreeListItemDetails';

export type TreeListItemProps = AriaLabelledProps & {
    node: TreeNode;
    expand?: boolean | number;
    level?: number;
    setSize?: number;
    posInSet?: number;
    parent?: TreeNode;
    isParentSelected?: boolean;
};

export type TreeListItemContainerProps = AriaTreeItemElementProps & {
    component: 'div';
};

export type TreeListNodeAPI = {
    containerProps: TreeListItemContainerProps;
    detailsProps: TreeListItemDetailsProps;
    childrenProps: TreeListItemChildrenProps;
    isExpanded: Accessor<boolean>;
};

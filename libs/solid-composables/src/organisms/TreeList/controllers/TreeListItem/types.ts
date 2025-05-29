import type { AriaLabelledProps, AriaTreeItemAPI } from '@no-comply/solid-accessibility';
import type { PropsWithComponent } from '@no-comply/solid-primitives';
import type { Accessor } from 'solid-js';

import type { TreeNode } from '../../types';
import type { TreeListItemChildrenProps } from '../TreeListItemChildren';
import type { TreeListItemDetailsProps } from '../TreeListItemDetails';

export type TreeListItemProps = AriaLabelledProps & {
    node: TreeNode;
    expand: boolean | number | undefined;
    level?: number;
    parent?: TreeNode;
    parentSelected?: boolean;
    setSize?: number;
    posInSet?: number;
};

export type TreeListItemAPI = {
    $root: AriaTreeItemAPI['$root'] & {
        component: 'div';
    };
    detailsProps: PropsWithComponent<TreeListItemDetailsProps>;
    childrenProps: PropsWithComponent<TreeListItemChildrenProps>;
    isExpanded: Accessor<boolean>;
};

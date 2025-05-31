import type { AriaGroupAPI, AriaLabelledProps } from '@no-comply/solid-accessibility';
import type { PropsWithComponent, Styles } from '@no-comply/solid-primitives';

import type { TreeListItemProps } from '../../controllers';
import type { TreeNode } from '../../types';

export type TreeListItemChildrenProps = AriaLabelledProps & {
    node: TreeNode;
    expand: boolean | number | undefined;
    level: number;
    parent?: TreeNode;
    parentSelected: boolean;
};

type TreeListItemComputedProps = Omit<TreeListItemProps, 'node' | 'posInSet'>;

export type TreeListItemChildrenAPI = {
    $root: AriaGroupAPI['$root'] & {
        id: string;
        style: Styles;
    };
    _treeListItem: PropsWithComponent<TreeListItemProps, TreeListItemComputedProps>;
};

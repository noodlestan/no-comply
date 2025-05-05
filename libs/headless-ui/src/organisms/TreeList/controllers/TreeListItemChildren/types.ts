import type { AriaGroupAPI, AriaLabelledProps } from '@noodlestan/context-ui-aria';
import type { PropsWithComponent, Styles } from '@noodlestan/context-ui-primitives';

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
    itemProps: PropsWithComponent<TreeListItemProps, TreeListItemComputedProps>;
};

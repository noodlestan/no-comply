import type { AriaGroupElementProps, AriaLabelledProps } from '@noodlestan/context-ui-aria';
import type { Styles } from '@noodlestan/context-ui-types';
import type { Accessor } from 'solid-js';

import type { TreeNode } from '../../../../../types';

export type TreeListChildrenProps = AriaLabelledProps & {
    node: TreeNode;
    expand: boolean | number | undefined;
    level: number;
};

export type TreeListChildrenContainerProps = AriaGroupElementProps & {
    style: Styles;
};

export type TreeListNodeAPI = {
    containerProps: Accessor<TreeListChildrenContainerProps>;
};

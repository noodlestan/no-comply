import type { AriaGroupElementProps, AriaLabelledProps } from '@noodlestan/context-ui-aria';
import type { Styles } from '@noodlestan/context-ui-primitives';

import type { TreeNode } from '../../../../../types';

export type TreeListChildrenProps = AriaLabelledProps & {
    node: TreeNode;
    expand: boolean | number | undefined;
    level: number;
};

export type TreeListChildrenAPI = {
    elProps: AriaGroupElementProps & {
        style: Styles;
    };
};

import type { Accessor } from 'solid-js';

import type { AriaGroupProps, AriaRegionOptions } from '../../../../../../../aria';
import type { Styles } from '../../../../../../../dom';
import type { TreeNode } from '../../../../../types';

export type TreeListChildrenOptions = Pick<AriaRegionOptions, 'label' | 'labelledby'> & {
    node: Accessor<TreeNode>;
    expand: Accessor<boolean | number | undefined>;
    level: Accessor<number>;
};

export type TreeListChildrenContainerProps = AriaGroupProps & {
    style: Styles;
};

export type TreeListNodeAPI = {
    containerProps: Accessor<TreeListChildrenContainerProps>;
};

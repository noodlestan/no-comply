import { createTreeListItemChildren } from '../../controllers';

import type { TreeListItemChildrenBaseAPI, TreeListItemChildrenBaseProps } from './types';

export const createTreeListItemChildrenBase = (
    props: TreeListItemChildrenBaseProps,
): TreeListItemChildrenBaseAPI => {
    return createTreeListItemChildren(props);
};

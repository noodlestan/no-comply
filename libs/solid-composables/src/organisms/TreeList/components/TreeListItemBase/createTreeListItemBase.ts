import { createTreeListItem } from '../../controllers';

import type { TreeListItemBaseAPI, TreeListItemBaseProps } from './types';

export const createTreeListItemBase = (props: TreeListItemBaseProps): TreeListItemBaseAPI => {
    return createTreeListItem(props);
};

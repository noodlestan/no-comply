import { createListItem } from '../../controllers';

import type { ListItemBaseAPI, ListItemBaseProps } from './types';

export const createListItemBase = (props: ListItemBaseProps): ListItemBaseAPI => {
    return createListItem(props);
};

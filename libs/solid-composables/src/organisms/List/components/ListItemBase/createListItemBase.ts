import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { createListItem } from '../../controllers';

import { $LIST_ITEM_BASE } from './constants';
import type { ListItemBaseAPI, ListItemBaseProps } from './types';

export const createListItemBase = (props: ListItemBaseProps): ListItemBaseAPI => {
    const [locals, expose] = createExposable($LIST_ITEM_BASE, props);

    const listItem = createListItem(locals);

    return exposeAPI(expose, '$root', listItem);
};

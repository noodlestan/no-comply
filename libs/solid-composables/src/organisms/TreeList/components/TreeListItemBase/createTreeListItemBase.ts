import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { createTreeListItem } from '../../controllers';

import { $TREE_LIST_ITEM_BASE } from './constants';
import type { TreeListItemBaseAPI, TreeListItemBaseProps } from './types';

export const createTreeListItemBase = (props: TreeListItemBaseProps): TreeListItemBaseAPI => {
	const [locals, expose, compose] = createExposable($TREE_LIST_ITEM_BASE, props);

	const api = compose(createTreeListItem(locals));

	return exposeAPI(expose, '$root', api);
};

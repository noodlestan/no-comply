import { createExposable, exposeAPI } from '@no-comply/solid-contexts';

import { createTreeListItemChildren } from '../../controllers';

import { $TREE_LIST_ITEM_CHILDREN_BASE } from './constants';
import type { TreeListItemChildrenBaseAPI, TreeListItemChildrenBaseProps } from './types';

export const createTreeListItemChildrenBase = (
	props: TreeListItemChildrenBaseProps,
): TreeListItemChildrenBaseAPI => {
	const [locals, expose, compose] = createExposable($TREE_LIST_ITEM_CHILDREN_BASE, props);

	const api = compose(createTreeListItemChildren(locals));

	return exposeAPI(expose, '$root', api);
};

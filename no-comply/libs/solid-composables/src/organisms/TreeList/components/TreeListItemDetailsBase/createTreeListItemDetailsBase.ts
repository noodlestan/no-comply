import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createTreeListItemDetails } from '../../controllers';
import { createTreeListItemDetailsMixin } from '../../mixins';

import { $TREE_LIST_ITEM_DETAILS_BASE } from './constants';
import type { TreeListItemDetailsBaseAPI, TreeListItemDetailsBaseProps } from './types';

export const createTreeListItemDetailsBase = (
	props: TreeListItemDetailsBaseProps,
): TreeListItemDetailsBaseAPI => {
	const [locals, expose, compose] = createExposable($TREE_LIST_ITEM_DETAILS_BASE, props);

	const {
		$root: $itemDetailsRoot,
		_focusable,
		hasToggle,
		...controllerRest
	} = compose(createTreeListItemDetails(locals));

	const {
		$root: $mixinRoot,
		$focusable: $mixinFocusable,
		...mixinRest
	} = compose(createTreeListItemDetailsMixin());

	// const itemContentsProps = combineProps(componentProps, $contents);

	return exposeAPI(expose, '$root', {
		$root: combineProps($itemDetailsRoot, $mixinRoot),
		_focusable: combineProps(_focusable, $mixinFocusable),
		...controllerRest,
		...mixinRest,
		hasToggle,
	});
};

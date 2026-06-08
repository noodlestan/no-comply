import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';
import { splitProps } from 'solid-js';

import { createList } from '../../controllers';
import { ListItemBase } from '../ListItemBase';

import { $LIST_BASE } from './constants';
import type { ListBaseAPI, ListBaseProps } from './types';

export const createListBase = (props: ListBaseProps): ListBaseAPI => {
	const [locals, expose, compose] = createExposable($LIST_BASE, props);

	const [, others] = splitProps(locals, ['components']);
	const components = () => ({
		item: locals.components.item ?? ListItemBase,
		itemContents: locals.components.itemContents,
	});
	const treeListProps = computedProps({
		components,
	});
	const { $root: $treeListRoot, ...rest } = compose(
		createList(combineProps(others, treeListProps)),
	);

	return exposeAPI(expose, '$root', {
		...rest,
		$root: $treeListRoot,
	});
};

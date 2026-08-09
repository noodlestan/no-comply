import { ARIA_LIST_ITEM_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import type { ListItemProps } from './types';

export const $LIST_ITEM = 'controller:composable:list-item';

export const LIST_ITEM_PROPS = definePropKeys<ListItemProps>()([
	...omitPropKeys(ARIA_LIST_ITEM_PROPS, ['component', 'selected'] as const),
	'item',
]);

import { definePropKeys } from '@no-comply/solid-primitives';

import { MENU_ITEM_GROUP_CONTEXT_OPTIONS } from '../../private';

import type { MenuItemGroupProps } from './types';

export const $MENU_ITEM_GROUP = 'controller:composable:menu-item-group';

export const MENU_ITEM_GROUP_PROPS = definePropKeys<MenuItemGroupProps>()([
	...MENU_ITEM_GROUP_CONTEXT_OPTIONS,
	'label',
	'description',
]);

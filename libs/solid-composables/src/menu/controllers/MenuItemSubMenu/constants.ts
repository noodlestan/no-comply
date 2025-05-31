import { definePropKeys } from '@no-comply/solid-primitives';

import { BASE_MENU_ITEM_PROPS } from '../../private';

import type { MenuItemSubMenuProps } from './types';

export const $MENU_ITEM_SUBMENU = 'controller:composable:menu-item-sub-menu';

export const MENU_ITEM_SUBMENU_PROPS = definePropKeys<MenuItemSubMenuProps>()([
    ...BASE_MENU_ITEM_PROPS,
    'id',
    'menuId',
]);

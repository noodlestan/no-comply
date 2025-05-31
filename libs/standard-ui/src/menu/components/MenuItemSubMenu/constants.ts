import { MENU_ITEM_SUBMENU_PROPS as HEADLESS_MENU_ITEM_SUBMENU_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { MENU_ITEM_MIXIN_PROPS } from '../../mixins';

import type { MenuItemSubMenuProps } from './types';

export const $MENU_ITEM_SUB_MENU = 'component:standard:menu-item-sub-menu';

export const MENU_ITEM_SUB_MENU_PROPS = definePropKeys<MenuItemSubMenuProps>()([
    ...HEADLESS_MENU_ITEM_SUBMENU_PROPS,
    ...MENU_ITEM_MIXIN_PROPS,
]);

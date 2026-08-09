import { MENU_ITEM_GROUP_PROPS as HEADLESS_MENU_ITEM_GROUP_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { MENU_MIXIN_PROPS } from '../../mixins';

import type { MenuItemGroupProps } from './types';

export const $MENU_ITEM_GROUP = 'component:standard:menu-item-group';

export const MENU_ITEM_GROUP_PROPS = definePropKeys<MenuItemGroupProps>()([
	...HEADLESS_MENU_ITEM_GROUP_PROPS,
	...MENU_MIXIN_PROPS,
]);

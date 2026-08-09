import { definePropKeys } from '@no-comply/solid-primitives';

import type { MenuItemGroupContextOptions } from './types';

export const MENU_ITEM_GROUP_CONTEXT_OPTIONS = definePropKeys<MenuItemGroupContextOptions>()([
	'hasIcons',
	'hasSubMenus',
]);

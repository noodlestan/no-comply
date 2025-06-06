import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { ACTION_MIXIN_PROPS } from '../../../action';

import type { MenuItemMixinProps } from './types';

export const $MENU_ITEM_MIXIN = 'mixin:standard:menu-item';

export const MENU_ITEM_MIXIN_PROPS = definePropKeys<MenuItemMixinProps>()([
	...omitPropKeys(ACTION_MIXIN_PROPS, ['size'] as const),
]);

import { MENU_ITEM_ACTION_PROPS as HEADLESS_MENU_ITEM_ACTION_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { MENU_ITEM_MIXIN_PROPS } from '../../mixins';

import type { MenuItemActionProps } from './types';

export const $MENU_ITEM_ACTION = 'component:standard:menu-item-action';

export const MENU_ITEM_ACTION_PROPS = definePropKeys<MenuItemActionProps>()([
    ...HEADLESS_MENU_ITEM_ACTION_PROPS,
    ...MENU_ITEM_MIXIN_PROPS,
]);

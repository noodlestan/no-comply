import { definePropKeys } from '@no-comply/solid-primitives';

import { BASE_MENU_ITEM_PROPS } from '../../private';

import type { MenuItemActionProps } from './types';

export const MENU_ITEM_ACTION_PROPS = definePropKeys<MenuItemActionProps>()([
    ...BASE_MENU_ITEM_PROPS,
]);

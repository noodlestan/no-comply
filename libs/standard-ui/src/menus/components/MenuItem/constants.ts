import { definePropKeys, omitPropKeys } from '@noodlestan/context-ui-primitives';
import { PRESSABLE_PROPS } from '@noodlestan/headless-ui';

import { MENU_ITEM_MIXIN_PROPS } from '../../mixins';

import type {
    HeadlessMenuItemActionProps,
    HeadlessMenuItemSubMenuProps,
    MenuItemActionProps,
    MenuItemBaseProps,
    MenuItemSubMenuProps,
} from './types';

const PARTIAL_PRESSABLE_PROPS = omitPropKeys(PRESSABLE_PROPS, ['role'] as const);

export const BASE_MENU_ITEM_PROPS = definePropKeys<MenuItemBaseProps>()([
    ...PARTIAL_PRESSABLE_PROPS,
    'label',
    'description',
    'icon',
]);

export const HEADLESS_MENU_ITEM_ACTION_PROPS = definePropKeys<HeadlessMenuItemActionProps>()([
    ...BASE_MENU_ITEM_PROPS,
]);

export const HEADLESS_MENU_ITEM_SUBMENU_PROPS = definePropKeys<HeadlessMenuItemSubMenuProps>()([
    ...BASE_MENU_ITEM_PROPS,
    'id',
    'menuId',
]);

export const MENU_ITEM_ACTION_PROPS = definePropKeys<MenuItemActionProps>()([
    ...HEADLESS_MENU_ITEM_ACTION_PROPS,
    ...MENU_ITEM_MIXIN_PROPS,
]);

export const MENU_ITEM_SUB_MENU_PROPS = definePropKeys<MenuItemSubMenuProps>()([
    ...HEADLESS_MENU_ITEM_SUBMENU_PROPS,
    ...MENU_ITEM_MIXIN_PROPS,
]);

import { definePropKeys } from '@no-comply/solid-primitives';

import { MENU_MIXIN_PROPS } from '../../mixins';

import type {
    HeadlessMenuItemGroupProps,
    MenuItemGroupContextOptions,
    MenuItemGroupProps,
} from './types';

export const MENU_ITEM_GROUP_CONTEXT_OPTIONS = definePropKeys<MenuItemGroupContextOptions>()([
    'hasIcons',
    'hasSubMenus',
]);

export const HEADLESS_MENU_ITEM_GROUP_PROPS = definePropKeys<HeadlessMenuItemGroupProps>()([
    ...MENU_ITEM_GROUP_CONTEXT_OPTIONS,
    'label',
    'description',
]);

export const MENU_ITEM_GROUP_PROPS = definePropKeys<MenuItemGroupProps>()([
    ...HEADLESS_MENU_ITEM_GROUP_PROPS,
    ...MENU_MIXIN_PROPS,
]);

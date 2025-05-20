import { definePropKeys, omitPropKeys } from '@noodlestan/context-ui-primitives';
import { PRESSABLE_PROPS } from '@noodlestan/headless-ui';

import { MENU_ITEM_MIXIN_PROPS } from '../../mixins';

import type { HeadlessMenuItemProps, MenuItemProps } from './types';

const PARTIAL_PRESSABLE_PROPS = omitPropKeys(PRESSABLE_PROPS, ['role'] as const);

export const HEADLESS_MENU_ITEM_PROPS = definePropKeys<HeadlessMenuItemProps>()([
    ...PARTIAL_PRESSABLE_PROPS,
    'label',
    'description',
    'icon',
]);

export const MENU_ITEM_PROPS = definePropKeys<MenuItemProps>()([
    ...HEADLESS_MENU_ITEM_PROPS,
    ...MENU_ITEM_MIXIN_PROPS,
]);

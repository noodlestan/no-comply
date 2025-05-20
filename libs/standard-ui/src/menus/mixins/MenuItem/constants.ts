import { definePropKeys, omitPropKeys } from '@noodlestan/context-ui-primitives';

import { ACTION_MIXIN_PROPS } from '../../../actions';

import type { MenuItemMixinProps } from './types';

export const MENU_ITEM_MIXIN_PROPS = definePropKeys<MenuItemMixinProps>()([
    ...omitPropKeys(ACTION_MIXIN_PROPS, ['size'] as const),
    'active',
]);

import { definePropKeys, omitPropKeys } from '@no-comply/solid-primitives';

import { PRESSABLE_PROPS } from '../../../../action';

import type { BaseMenuItemProps } from './types';

export const $BASE_MENU_ITEM = 'controller:composable:base-menu-item';

export const BASE_MENU_ITEM_PROPS = definePropKeys<BaseMenuItemProps>()([
	...omitPropKeys(PRESSABLE_PROPS, ['role'] as const),
	'label',
	'description',
	'icon',
]);

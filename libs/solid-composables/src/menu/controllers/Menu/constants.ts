import { ARIA_MENU_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys } from '@no-comply/solid-primitives';

import { MENU_CONTEXT_OPTIONS } from '../../private';

import type { MenuProps } from './types';

export const $MENU = 'controller:composable:menu';

export const MENU_PROPS = definePropKeys<MenuProps>()([
	...MENU_CONTEXT_OPTIONS,
	...ARIA_MENU_PROPS,
]);

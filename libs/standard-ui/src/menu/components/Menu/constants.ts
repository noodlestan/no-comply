import { MENU_PROPS as HEADLESS_MENU_PROPS } from '@no-comply/solid-composables';
import { definePropKeys } from '@no-comply/solid-primitives';

import { MENU_MIXIN_PROPS } from '../../mixins';

import type { MenuProps } from './types';

export const $MENU = 'component:standard:menu';

export const MENU_PROPS = definePropKeys<MenuProps>()([
    ...HEADLESS_MENU_PROPS,
    ...MENU_MIXIN_PROPS,
]);

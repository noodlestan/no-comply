import { ARIA_MENU_PROPS } from '@no-comply/solid-accessibility';
import { definePropKeys } from '@no-comply/solid-primitives';

import { MENU_MIXIN_PROPS } from '../../mixins';

import type { HeadlessMenuProps, MenuContextOptions, MenuProps } from './types';

export const MENU_CONTEXT_OPTIONS = definePropKeys<MenuContextOptions>()(['id']);

export const HEADLESS_MENU_PROPS = definePropKeys<HeadlessMenuProps>()([
    ...MENU_CONTEXT_OPTIONS,
    ...ARIA_MENU_PROPS,
]);

export const MENU_PROPS = definePropKeys<MenuProps>()([
    ...HEADLESS_MENU_PROPS,
    ...MENU_MIXIN_PROPS,
]);

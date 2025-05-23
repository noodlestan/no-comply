import { ARIA_MENU_PROPS } from '@noodlestan/context-ui-aria';
import { definePropKeys } from '@noodlestan/context-ui-primitives';

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

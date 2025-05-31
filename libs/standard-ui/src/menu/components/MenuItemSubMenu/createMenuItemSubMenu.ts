import {
    createAnchoredPopoverMixin,
    createFocusRing,
    createMenuItemSubMenu as createHeadlessMenuItemSubMenu,
} from '@no-comply/solid-composables';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps } from '@no-comply/solid-primitives';

import { createMenuItemMixin } from '../../mixins';
import { createBaseMenuItem } from '../../private';

import { $MENU_ITEM_SUB_MENU } from './constants';
import type { MenuItemSubMenuAPI, MenuItemSubMenuProps } from './types';

export const createMenuItemSubMenu = (props: MenuItemSubMenuProps): MenuItemSubMenuAPI => {
    const [locals, expose, compose] = createExposable($MENU_ITEM_SUB_MENU, props);

    const {
        $root: $menuItem,
        $popover,
        $label: $menuItemLabel,
        $description: $menuItemDescription,
        _icon: _menuItemIcon,
        ...rest
    } = compose(createHeadlessMenuItemSubMenu(locals));

    const { _label, _textDescription, _icon } = compose(createBaseMenuItem());
    const { $root: $focusRingRoot } = compose(createFocusRing());
    const { $root: $menuItemMixinRoot, ...mixinRest } = compose(createMenuItemMixin(locals));
    const { $root: $popoverMixin } = compose(createAnchoredPopoverMixin());

    return exposeAPI(expose, '$root', {
        ...rest,
        $root: combineProps($menuItem, $focusRingRoot, $menuItemMixinRoot),
        $popover: combineProps($popover, $popoverMixin),
        ...mixinRest,
        _label: combineProps($menuItemLabel, _label),
        _textDescription: combineProps($menuItemDescription, _textDescription),
        _icon: combineProps(_menuItemIcon, _icon),
    });
};

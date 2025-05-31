import {
    createAnchoredPopoverMixin,
    createFocusRing,
    createMenuItemSubMenu as createHeadlessMenuItemSubMenu,
} from '@no-comply/solid-composables';
import { combineProps } from '@no-comply/solid-primitives';

import { createMenuItemMixin } from '../../mixins';
import { createBaseMenuItem } from '../../private';

import type { MenuItemSubMenuAPI, MenuItemSubMenuProps } from './types';

export const createMenuItemSubMenu = (props: MenuItemSubMenuProps): MenuItemSubMenuAPI => {
    const {
        $root: $headlessMenuItem,
        $popover,
        $label: $headlessLabel,
        $description: $headlessDescription,
        iconProps: headlessIconProps,
        ...rest
    } = createHeadlessMenuItemSubMenu(props);
    const { labelProps, descriptionProps, iconProps } = createBaseMenuItem();
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $menuItemMixinRoot, ...mixinRest } = createMenuItemMixin(props);
    const { $root: $popoverMixin } = createAnchoredPopoverMixin();

    return {
        ...rest,
        $root: combineProps($headlessMenuItem, $focusRingRoot, $menuItemMixinRoot),
        $popover: combineProps($popover, $popoverMixin),
        ...mixinRest,
        labelProps: combineProps($headlessLabel, labelProps),
        descriptionProps: combineProps($headlessDescription, descriptionProps),
        iconProps: combineProps(headlessIconProps, iconProps),
    };
};

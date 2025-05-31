import {
    createFocusRing,
    createMenuItemAction as createHeadlessMenuItemAction,
} from '@no-comply/solid-composables';
import { combineProps } from '@no-comply/solid-primitives';

import { createMenuItemMixin } from '../../mixins';
import { createBaseMenuItem } from '../../private';

import type { MenuItemActionAPI, MenuItemActionProps } from './types';

export const createMenuItemAction = (props: MenuItemActionProps): MenuItemActionAPI => {
    const {
        $root: $headlessMenuItem,
        $label: $headlessLabel,
        $description: $headlessDescription,
        iconProps: headlessIconProps,
        ...rest
    } = createHeadlessMenuItemAction(props);
    const { labelProps, descriptionProps, iconProps } = createBaseMenuItem();
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $menuItemMixinRoot, ...mixinRest } = createMenuItemMixin(props);

    return {
        ...rest,
        $root: combineProps($headlessMenuItem, $focusRingRoot, $menuItemMixinRoot),
        ...mixinRest,
        labelProps: combineProps($headlessLabel, labelProps),
        descriptionProps: combineProps($headlessDescription, descriptionProps),
        iconProps: combineProps(headlessIconProps, iconProps),
    };
};

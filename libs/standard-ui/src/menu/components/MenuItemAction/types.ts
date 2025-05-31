import type {
    FocusRingAPI,
    MenuItemActionAPI as HeadlessMenuItemActionAPI,
    MenuItemActionProps as HeadlessMenuItemActionProps,
} from '@no-comply/solid-composables';

import type { MenuItemMixinAPI, MenuItemMixinProps } from '../../mixins';
import type { BaseMenuItemAPI } from '../../private';

export type MenuItemActionProps = HeadlessMenuItemActionProps & MenuItemMixinProps;

export type MenuItemActionAPI = Omit<
    HeadlessMenuItemActionAPI,
    '$root' | '$label' | '$description' | 'iconProps'
> &
    Omit<MenuItemMixinAPI, '$root'> & {
        $root: HeadlessMenuItemActionAPI['$root'] &
            FocusRingAPI['$root'] &
            MenuItemMixinAPI['$root'];
        labelProps: HeadlessMenuItemActionAPI['$label'] & BaseMenuItemAPI['labelProps'];
        descriptionProps: HeadlessMenuItemActionAPI['$description'] &
            BaseMenuItemAPI['descriptionProps'];
        iconProps: HeadlessMenuItemActionAPI['iconProps'] & BaseMenuItemAPI['iconProps'];
    };

import type {
    FocusRingAPI,
    MenuItemSubMenuAPI as HeadlessMenuItemSubMenuAPI,
    MenuItemSubMenuProps as HeadlessMenuItemSubMenuProps,
} from '@no-comply/solid-composables';

import type { MenuItemMixinAPI, MenuItemMixinProps } from '../../mixins';
import type { BaseMenuItemAPI } from '../../private';

export type MenuItemSubMenuProps = HeadlessMenuItemSubMenuProps & MenuItemMixinProps;

export type MenuItemSubMenuAPI = Omit<
    HeadlessMenuItemSubMenuAPI,
    '$root' | '$label' | '$description' | 'iconProps'
> &
    Omit<MenuItemMixinAPI, '$root'> & {
        $root: HeadlessMenuItemSubMenuAPI['$root'] &
            FocusRingAPI['$root'] &
            MenuItemMixinAPI['$root'];
        labelProps: HeadlessMenuItemSubMenuAPI['$label'] & BaseMenuItemAPI['labelProps'];
        descriptionProps: HeadlessMenuItemSubMenuAPI['$description'] &
            BaseMenuItemAPI['descriptionProps'];
        iconProps: HeadlessMenuItemSubMenuAPI['iconProps'] & BaseMenuItemAPI['iconProps'];
    };

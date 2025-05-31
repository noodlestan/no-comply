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
    '$root' | '$label' | '$description' | '_icon'
> &
    Omit<MenuItemMixinAPI, '$root'> & {
        $root: HeadlessMenuItemSubMenuAPI['$root'] &
            FocusRingAPI['$root'] &
            MenuItemMixinAPI['$root'];
        _label: HeadlessMenuItemSubMenuAPI['$label'] & BaseMenuItemAPI['_label'];
        _textDescription: HeadlessMenuItemSubMenuAPI['$description'] &
            BaseMenuItemAPI['_textDescription'];
        _icon: HeadlessMenuItemSubMenuAPI['_icon'] & BaseMenuItemAPI['_icon'];
    };

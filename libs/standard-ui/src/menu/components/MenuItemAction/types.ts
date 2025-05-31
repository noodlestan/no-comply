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
        _label: HeadlessMenuItemActionAPI['$label'] & BaseMenuItemAPI['_label'];
        _textDescription: HeadlessMenuItemActionAPI['$description'] &
            BaseMenuItemAPI['_textDescription'];
        _icon: HeadlessMenuItemActionAPI['_icon'] & BaseMenuItemAPI['_icon'];
    };

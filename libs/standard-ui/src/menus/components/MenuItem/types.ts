import type { IconComponent } from '@noodlestan/context-ui';
import type { FocusRingAPI, PressableAPI, PressableProps } from '@noodlestan/headless-ui';

import type { MenuItemMixinAPI, MenuItemMixinProps } from '../../mixins';

export type HeadlessMenuItemProps = Omit<PressableProps, 'role'> & {
    label: string;
    description?: string;
    icon?: IconComponent;
};

export type HeadlessMenuItemAPI = {
    $root: PressableAPI['$root'] & {
        role: 'menuitem';
    };
};

export type HeadlessMenuItemCheckboxProps = HeadlessMenuItemProps & {
    checked: boolean;
};

export type HeadlessMenuItemRadioProps = HeadlessMenuItemProps & {
    checked: boolean;
};

export type HeadlessMenuItemSubMenuProps = HeadlessMenuItemProps;

export type MenuItemProps = HeadlessMenuItemProps & MenuItemMixinProps;

export type MenuItemAPI = {
    $root: HeadlessMenuItemAPI['$root'] & FocusRingAPI['$root'] & MenuItemMixinAPI['$root'];
};

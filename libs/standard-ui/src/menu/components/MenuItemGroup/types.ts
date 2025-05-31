import type { AriaGroupAPI } from '@no-comply/solid-accessibility';
import type { BaseContext } from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

import type { LabelProps, TextProps } from '../../../typography';
import type { MenuItemGroupMixinAPI, MenuItemGroupMixinProps } from '../../mixins';
import type { MenuItemAPI } from '../MenuItem';

export type MenuItemGroupContextOptions = {
    hasIcons?: boolean;
    hasSubMenus?: boolean;
};

export type MenuItemGroupContext = BaseContext & {
    type: 'menu-item-group';
    addItem: (item: MenuItemAPI) => void;
    removeItem: (item: MenuItemAPI) => void;
    hasIcons: Accessor<boolean>;
    hasSubMenus: Accessor<boolean>;
};

export type MenuItemGroupContextValue = [MenuItemGroupContext];

export type HeadlessMenuItemGroupProps = MenuItemGroupContextOptions & {
    label?: string;
    description?: string;
};

export type HeadlessMenuItemGroupAPI = {
    $root: AriaGroupAPI['$root'] & {
        'data-menu-item-group': '';
    };
    $label: AriaGroupAPI['$label'] & {
        children: string | undefined;
    };
    $description: AriaGroupAPI['$description'] & {
        children: string | undefined;
    };
    hasLabel: Accessor<boolean>;
    context: MenuItemGroupContext;
    contextValue: MenuItemGroupContextValue;
};

export type MenuItemGroupProps = HeadlessMenuItemGroupProps & MenuItemGroupMixinProps;

export type MenuItemGroupAPI = Omit<
    HeadlessMenuItemGroupAPI,
    '$root' | '$label' | '$description'
> & {
    $root: HeadlessMenuItemGroupAPI['$root'] & MenuItemGroupMixinAPI['$root'];
    labelProps: HeadlessMenuItemGroupAPI['$label'] &
        MenuItemGroupMixinAPI['$label'] & {
            variant: LabelProps['variant'];
        };
    descriptionProps: HeadlessMenuItemGroupAPI['$description'] &
        MenuItemGroupMixinAPI['$description'] & {
            variant: TextProps['variant'];
        };
};

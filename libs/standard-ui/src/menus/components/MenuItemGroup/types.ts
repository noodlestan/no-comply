import type { BaseContext } from '@noodlestan/context-ui';
import type { AriaGroupAPI } from '@noodlestan/context-ui-aria';
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
    label: string;
    description?: string;
};

export type HeadlessMenuItemGroupAPI = Omit<AriaGroupAPI, 'label' | 'description'> & {
    $label: AriaGroupAPI['$label'] & { children: string };
    $description: AriaGroupAPI['$description'] & { children: string | undefined };
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

import type { IconComponent } from '@noodlestan/context-ui';
import type { AriaAttributes, AriaLabelledAPI } from '@noodlestan/context-ui-aria';
import type {
    AnchoredPopoverAPI,
    FocusRingAPI,
    PressableAPI,
    PressableProps,
} from '@noodlestan/headless-ui';
import type { Accessor } from 'solid-js';

import type { IconProps } from '../../../icon';
import type { LabelProps, TextProps } from '../../../typography';
import type { MenuItemMixinAPI, MenuItemMixinProps } from '../../mixins';

/* headless */

export type MenuItemBaseProps = Omit<PressableProps, 'role'> & {
    label: string;
    description?: string;
    icon?: IconComponent;
};

export type MenuItemAPI = {
    hasIcon: Accessor<boolean>;
    hasSubMenu: Accessor<boolean>;
};

export type MenuItemBaseAPI = MenuItemAPI & {
    $root: AriaLabelledAPI['$root'] &
        PressableAPI['$root'] & {
            role: 'menuitem';
        };
    $label: AriaLabelledAPI['$label'] & { children: string };
    $description: AriaLabelledAPI['$description'] & { children: string | undefined };
    iconProps: () => {
        icon: IconProps['icon'];
        size: NonNullable<IconProps['size']>;
        aligned: true;
        'aria-hidden': AriaAttributes['aria-hidden'];
    };
    groupHasIcons: Accessor<boolean>;
    groupHasSubMenus: Accessor<boolean>;
};

export type HeadlessMenuItemActionProps = MenuItemBaseProps;

export type HeadlessMenuItemActionAPI = MenuItemBaseAPI;

export type HeadlessMenuItemCheckboxProps = MenuItemBaseProps & {
    checked: boolean;
};

export type HeadlessMenuItemRadioProps = MenuItemBaseProps & {
    checked: boolean;
};

export type HeadlessMenuItemSubMenuProps = MenuItemBaseProps & {
    id?: string;
    menuId?: string;
};

export type HeadlessMenuItemSubMenuAPI = Omit<MenuItemBaseAPI, '$root'> &
    Pick<AnchoredPopoverAPI, 'context' | 'contextValue'> & {
        $root: MenuItemBaseAPI['$root'] & AnchoredPopoverAPI['$trigger'];
        $popover: AnchoredPopoverAPI['$root'];
        subMenuProps: {
            id: string;
            ['aria-labelledby']: string;
        };
    };

/* standard */

export type MenuItemActionProps = HeadlessMenuItemActionProps & MenuItemMixinProps;

export type MenuItemSubMenuProps = HeadlessMenuItemSubMenuProps & MenuItemMixinProps;

export type MenuItemActionAPI = Omit<
    HeadlessMenuItemActionAPI,
    '$root' | '$label' | '$description'
> &
    Omit<MenuItemMixinAPI, '$root'> & {
        $root: HeadlessMenuItemActionAPI['$root'] &
            FocusRingAPI['$root'] &
            MenuItemMixinAPI['$root'];
        labelProps: HeadlessMenuItemActionAPI['$label'] & {
            variant: LabelProps['size'];
        };
        descriptionProps: HeadlessMenuItemActionAPI['$description'] & {
            variant: TextProps['variant'];
        };
    };

export type MenuItemSubMenuAPI = Omit<
    HeadlessMenuItemSubMenuAPI,
    '$root' | '$label' | '$description'
> &
    Omit<MenuItemMixinAPI, '$root'> & {
        $root: HeadlessMenuItemSubMenuAPI['$root'] &
            FocusRingAPI['$root'] &
            MenuItemMixinAPI['$root'];
        labelProps: HeadlessMenuItemSubMenuAPI['$label'] & {
            variant: LabelProps['size'];
        };
        descriptionProps: HeadlessMenuItemSubMenuAPI['$description'] & {
            variant: TextProps['variant'];
        };
    };

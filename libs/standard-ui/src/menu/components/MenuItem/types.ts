import type { AriaAttributes, AriaLabelledAPI } from '@no-comply/solid-accessibility';
import type {
    AnchoredPopoverAPI,
    FocusRingAPI,
    PressableAPI,
    PressableProps,
} from '@no-comply/solid-composables';
import type { IconComponent } from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

import type { IconProps } from '../../../icon';
import type { MenuItemMixinAPI, MenuItemMixinProps } from '../../mixins';

/* headless */

export type MenuItemType = 'action' | 'sub-menu';

export type MenuItemBaseProps = Omit<PressableProps, 'role'> & {
    label: string;
    description?: string;
    icon?: IconComponent;
};

export type MenuItemAPI = {
    hasIcon: Accessor<boolean>;
    isSubMenu: Accessor<boolean>;
};

export type MenuItemBaseAPI = MenuItemAPI & {
    $root: AriaLabelledAPI['$root'] &
        PressableAPI<'menuitem'>['$root'] & {
            'data-menu-item': MenuItemType;
        };
    $label: AriaLabelledAPI['$label'] & { children: string };
    $description: AriaLabelledAPI['$description'] & { children: string | undefined };
    iconProps: {
        icon: IconProps['icon'];
        size: NonNullable<IconProps['size']>;
        aligned: boolean;
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

export type MenuItemCommonAPI = {
    labelProps: {
        variant: 'small';
        tag: 'span';
        aligned: true;
    };
    descriptionProps: {
        variant: 'small';
        tag: 'span';
    };
    iconProps: {
        aligned: true;
    };
};

export type MenuItemActionProps = HeadlessMenuItemActionProps & MenuItemMixinProps;

export type MenuItemSubMenuProps = HeadlessMenuItemSubMenuProps & MenuItemMixinProps;

export type MenuItemActionAPI = Omit<
    HeadlessMenuItemActionAPI,
    '$root' | '$label' | '$description' | 'iconProps'
> &
    Omit<MenuItemMixinAPI, '$root'> & {
        $root: HeadlessMenuItemActionAPI['$root'] &
            FocusRingAPI['$root'] &
            MenuItemMixinAPI['$root'];
        labelProps: HeadlessMenuItemActionAPI['$label'] & MenuItemCommonAPI['labelProps'];
        descriptionProps: HeadlessMenuItemActionAPI['$description'] &
            MenuItemCommonAPI['descriptionProps'];
        iconProps: HeadlessMenuItemActionAPI['iconProps'] & MenuItemCommonAPI['iconProps'];
    };

export type MenuItemSubMenuAPI = Omit<
    HeadlessMenuItemSubMenuAPI,
    '$root' | '$label' | '$description' | 'iconProps'
> &
    Omit<MenuItemMixinAPI, '$root'> & {
        $root: HeadlessMenuItemSubMenuAPI['$root'] &
            FocusRingAPI['$root'] &
            MenuItemMixinAPI['$root'];
        labelProps: HeadlessMenuItemSubMenuAPI['$label'] & MenuItemCommonAPI['labelProps'];
        descriptionProps: HeadlessMenuItemSubMenuAPI['$description'] &
            MenuItemCommonAPI['descriptionProps'];
        iconProps: HeadlessMenuItemSubMenuAPI['iconProps'] & MenuItemCommonAPI['iconProps'];
    };

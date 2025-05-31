import type { AriaAttributes, AriaLabelledAPI } from '@no-comply/solid-accessibility';
import type { IconComponent } from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

import type { PressableAPI, PressableProps } from '../../../../action';
import type { IconProps } from '../../../../icon';
import type { MenuItemAPI, MenuItemType } from '../../../types';

export type BaseMenuItemProps = Omit<PressableProps, 'role'> & {
    label: string;
    description?: string;
    icon?: IconComponent;
};

export type BaseMenuItemAPI = MenuItemAPI & {
    $root: AriaLabelledAPI['$root'] &
        PressableAPI<'menuitem'>['$root'] & {
            'data-menu-item': MenuItemType;
        };
    $label: AriaLabelledAPI['$label'] & { children: string };
    $description: AriaLabelledAPI['$description'] & { children: string | undefined };
    iconProps: {
        icon: IconProps['icon'];
        aligned: boolean;
        'aria-hidden': AriaAttributes['aria-hidden'];
    };
    groupHasIcons: Accessor<boolean>;
    groupHasSubMenus: Accessor<boolean>;
};

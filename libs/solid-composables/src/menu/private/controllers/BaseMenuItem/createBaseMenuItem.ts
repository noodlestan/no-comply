import { createAriaMenuItem } from '@no-comply/solid-accessibility';
import type { IconComponent } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createPressable } from '../../../../action';
import { useMenuItemGroupChild } from '../../../providers';
import type { MenuItemType } from '../../../types';

import type { BaseMenuItemAPI, BaseMenuItemProps } from './types';

export const createBaseMenuItem = (
    props: BaseMenuItemProps,
    type: MenuItemType,
): BaseMenuItemAPI => {
    // const setRovingFocus = (value: boolean) => console.log('set focus', value);
    // const menuContext = useMenuItem({ setRovingFocus });

    const ariaMenuItemProps = computedProps(
        { labelled: true },
        { described: () => Boolean(props.description) },
    );
    const {
        $root: $ariaMenuItemRoot,
        $label: $ariaMenuItemLabel,
        $description: $ariaMenuItemDescription,
    } = createAriaMenuItem(ariaMenuItemProps);

    const { $root: $pressableRoot } = createPressable(props, 'menuitem');

    const $localLabel = computedProps({
        children: () => props.label,
    });

    const $localDescription = computedProps({
        children: () => props.description,
    });

    const hasIcon = () => Boolean(props.icon);
    const isSubMenu = () => type === 'sub-menu';

    const iconStaticProps = {
        aligned: true,
        'aria-hidden': true,
    };

    const iconProps = computedProps(iconStaticProps, {
        icon: () => {
            if (!props.icon) {
                console.error('Unavailable. Wrap in `hasIcon()`.');
            }
            return props.icon as IconComponent;
        },
    });

    const $root = {
        'data-menu-item': type,
    };

    const menuItemAPI = {
        hasIcon,
        isSubMenu,
    };

    const context = useMenuItemGroupChild(menuItemAPI);

    return {
        $root: combineProps($pressableRoot, $ariaMenuItemRoot, $root),
        $label: combineProps($ariaMenuItemLabel, $localLabel),
        $description: combineProps($ariaMenuItemDescription, $localDescription),
        iconProps,
        hasIcon,
        isSubMenu,
        groupHasIcons: () => hasIcon() || Boolean(context?.hasIcons()),
        groupHasSubMenus: () => isSubMenu() || Boolean(context?.hasSubMenus()),
    };
};

import { createAriaMenuItem } from '@no-comply/solid-accessibility';
import {
    PLACEMENT_AXIS_INLINE,
    createAnchoredPopover,
    createAnchoredPopoverMixin,
    createFocusRing,
    createPressable,
} from '@no-comply/solid-composables';
import type { IconComponent } from '@no-comply/solid-contexts';
import {
    type PressEvent,
    createComputedProps,
    mergeProps,
    pickProps,
    shortId,
} from '@no-comply/solid-primitives';
import { createMemo, onCleanup } from 'solid-js';

import { createMenuItemMixin } from '../../mixins';
import { useMenu } from '../Menu';
import { type MenuItemGroupContext, useMenuItemGroupMaybe } from '../MenuItemGroup';

import { HEADLESS_MENU_ITEM_ACTION_PROPS } from './constants';
import type {
    HeadlessMenuItemActionAPI,
    HeadlessMenuItemActionProps,
    HeadlessMenuItemSubMenuAPI,
    HeadlessMenuItemSubMenuProps,
    MenuItemAPI,
    MenuItemActionAPI,
    MenuItemActionProps,
    MenuItemBaseAPI,
    MenuItemBaseProps,
    MenuItemCommonAPI,
    MenuItemSubMenuAPI,
    MenuItemSubMenuProps,
    MenuItemType,
} from './types';

export const useMenuItemGroupChild = (menuItem: MenuItemAPI): MenuItemGroupContext | undefined => {
    const context = useMenuItemGroupMaybe();

    if (context) {
        context.addItem(menuItem);
    }

    onCleanup(() => {
        if (context) {
            context.removeItem(menuItem);
        }
    });

    return context;
};

export const createMenuItemBase = (
    props: MenuItemBaseProps,
    type: MenuItemType,
): MenuItemBaseAPI => {
    // const setRovingFocus = (value: boolean) => console.log('set focus', value);
    // const menuContext = useMenuItem({ setRovingFocus });

    const ariaMenuItemProps = createComputedProps(
        { labelled: true },
        { described: () => Boolean(props.description) },
    );
    const {
        $root: $ariaMenuItemRoot,
        $label: $ariaMenuItemLabel,
        $description: $ariaMenuItemDescription,
    } = createAriaMenuItem(ariaMenuItemProps);

    const { $root: $pressableRoot } = createPressable(props, 'menuitem');

    const $localLabel = createComputedProps({
        children: () => props.label,
    });

    const $localDescription = createComputedProps({
        children: () => props.description,
    });

    const hasIcon = () => Boolean(props.icon);
    const isSubMenu = () => type === 'sub-menu';

    const iconStaticProps = {
        aligned: true,
        'aria-hidden': true,
        size: 'small' as const,
    };

    const iconProps = createComputedProps(iconStaticProps, {
        icon: () => {
            if (!props.icon) {
                console.error('Unavailable. Wrap in `hasIcon()`.');
            }
            return props.icon as IconComponent;
        },
    });

    const $localRoot = {
        'data-menu-item': type,
    };

    const menuItemAPI = {
        hasIcon,
        isSubMenu,
    };

    const context = useMenuItemGroupChild(menuItemAPI);

    return {
        $root: mergeProps($pressableRoot, $ariaMenuItemRoot, $localRoot),
        $label: mergeProps($ariaMenuItemLabel, $localLabel),
        $description: mergeProps($ariaMenuItemDescription, $localDescription),
        iconProps,
        hasIcon,
        isSubMenu,
        groupHasIcons: () => hasIcon() || Boolean(context?.hasIcons()),
        groupHasSubMenus: () => isSubMenu() || Boolean(context?.hasSubMenus()),
    };
};

export const createHeadlessMenuItemAction = (
    props: HeadlessMenuItemActionProps,
): HeadlessMenuItemActionAPI => {
    const menuContext = useMenu();

    const picked = pickProps(
        props,
        HEADLESS_MENU_ITEM_ACTION_PROPS.filter(i => i !== 'onPress'),
    );
    const menuItemBaseProps = mergeProps(picked, {
        onPress: (ev: PressEvent) => {
            props.onPress?.(ev);
            if (!ev.defaultPrevented) {
                menuContext.dismissStack();
                ev.preventDefault();
                ev.stopImmediatePropagation();
            }
        },
    });

    return createMenuItemBase(menuItemBaseProps, 'action');
};

export const createHeadlessMenuItemSubMenu = (
    props: HeadlessMenuItemSubMenuProps,
): HeadlessMenuItemSubMenuAPI => {
    const randomId1 = createMemo(shortId);
    const randomId2 = createMemo(shortId);
    const id = () => props.id ?? randomId1();
    const subMenuId = () => props.menuId ?? randomId2();

    const { $root, $label, ...rest } = createMenuItemBase(props, 'sub-menu');

    const anchoredPopoverProps = createComputedProps({
        id,
        targetId: subMenuId,
        direction: () => PLACEMENT_AXIS_INLINE,
    });
    const {
        $root: $popover,
        $trigger,
        context,
        contextValue,
    } = createAnchoredPopover(anchoredPopoverProps);

    const subMenuProps = createComputedProps({
        id: subMenuId,
        'aria-labelledby': () => $label.id as string,
    });

    return {
        ...rest,
        $root: mergeProps($root, $trigger),
        $label,
        $popover,
        subMenuProps,
        context,
        contextValue,
    };
};

export const createMenuItemCommon = (): MenuItemCommonAPI => {
    const labelProps = {
        variant: 'small',
        tag: 'span',
        aligned: true,
    } as const;

    const descriptionProps = {
        variant: 'small',
        tag: 'span',
    } as const;

    const iconProps = {
        aligned: true,
    } as const;

    return {
        labelProps,
        descriptionProps,
        iconProps,
    };
};

export const createMenuItemAction = (props: MenuItemActionProps): MenuItemActionAPI => {
    const {
        $root: $headlessMenuItem,
        $label: $headlessLabel,
        $description: $headlessDescription,
        iconProps: headlessIconProps,
        ...rest
    } = createHeadlessMenuItemAction(props);
    const { labelProps, descriptionProps, iconProps } = createMenuItemCommon();
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $menuItemMixinRoot, ...mixinRest } = createMenuItemMixin(props);

    return {
        ...rest,
        $root: mergeProps($headlessMenuItem, $focusRingRoot, $menuItemMixinRoot),
        ...mixinRest,
        labelProps: mergeProps($headlessLabel, labelProps),
        descriptionProps: mergeProps($headlessDescription, descriptionProps),
        iconProps: mergeProps(headlessIconProps, iconProps),
    };
};

export const createMenuItemSubMenu = (props: MenuItemSubMenuProps): MenuItemSubMenuAPI => {
    const {
        $root: $headlessMenuItem,
        $popover,
        $label: $headlessLabel,
        $description: $headlessDescription,
        iconProps: headlessIconProps,
        ...rest
    } = createHeadlessMenuItemSubMenu(props);
    const { labelProps, descriptionProps, iconProps } = createMenuItemCommon();
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $menuItemMixinRoot, ...mixinRest } = createMenuItemMixin(props);
    const { $root: $popoverMixin } = createAnchoredPopoverMixin();

    return {
        ...rest,
        $root: mergeProps($headlessMenuItem, $focusRingRoot, $menuItemMixinRoot),
        $popover: mergeProps($popover, $popoverMixin),
        ...mixinRest,
        labelProps: mergeProps($headlessLabel, labelProps),
        descriptionProps: mergeProps($headlessDescription, descriptionProps),
        iconProps: mergeProps(headlessIconProps, iconProps),
    };
};

import { createAriaGroup } from '@no-comply/solid-accessibility';
import { combineProps, computedProps } from '@no-comply/solid-primitives';
import { createContext, createSignal, useContext } from 'solid-js';

import { createMenuItemGroupMixin } from '../../mixins';
import type { MenuItemAPI } from '../MenuItem';

import type {
    HeadlessMenuItemGroupAPI,
    HeadlessMenuItemGroupProps,
    MenuItemGroupAPI,
    MenuItemGroupContext,
    MenuItemGroupContextOptions,
    MenuItemGroupContextValue,
    MenuItemGroupProps,
} from './types';

export const MenuItemGroupContextCTX = createContext<MenuItemGroupContextValue>();

export const useMenuItemGroupMaybe = (): MenuItemGroupContext | undefined => {
    const [context] = useContext(MenuItemGroupContextCTX) || [];
    return context;
};

export const useMenuItemGroup = (): MenuItemGroupContext => {
    const [context] = useContext(MenuItemGroupContextCTX) || [];
    if (!context) {
        throw new Error('useMenuItemGroup() must be wrapped in <MenuItemGroupContextProvider/>');
    }

    return context;
};

const createMenuItemGroupContext = (
    options: MenuItemGroupContextOptions,
): MenuItemGroupContextValue => {
    const maybeGroup = useMenuItemGroupMaybe();
    if (maybeGroup) {
        throw new Error(
            'createMenuItemGroupContext() must not be wrapped in <MenuItemGroupContextProvider/>',
        );
    }

    const [items, setItems] = createSignal<MenuItemAPI[]>([]);

    const addItem = (item: MenuItemAPI) => {
        setItems(items => [...items, item]);
    };

    const removeItem = (item: MenuItemAPI) => {
        setItems(items => items.filter(i => i === item));
    };

    const hasIcons = () => options.hasIcons ?? Boolean(items().find(item => item.hasIcon()));
    const hasSubMenus = () =>
        options.hasSubMenus ?? Boolean(items().find(item => item.isSubMenu()));

    const context = {
        type: 'menu-item-group' as const,
        addItem,
        removeItem,
        hasIcons,
        hasSubMenus,
    };

    return [context];
};

export const createHeadlessMenuItemGroup = (
    props: HeadlessMenuItemGroupProps,
): HeadlessMenuItemGroupAPI => {
    const contextValue = createMenuItemGroupContext(props);
    const [context] = contextValue;

    const ariaGroupProps = computedProps({
        labelled: () => Boolean(props.label),
    });
    const { $root: $groupRoot, $label, $description, hasLabel } = createAriaGroup(ariaGroupProps);

    const $root = {
        'data-menu-item-group': '' as const,
    };

    const $localLabel = computedProps({
        children: () => props.label,
    });

    const $localDescription = computedProps({
        children: () => props.description,
    });

    return {
        $root: combineProps($groupRoot, $root),
        $label: combineProps($label, $localLabel),
        $description: combineProps($description, $localDescription),
        hasLabel,
        context,
        contextValue,
    };
};

export const createMenuItemGroup = (props: MenuItemGroupProps): MenuItemGroupAPI => {
    const {
        $root: $headlessRoot,
        $label: $headlessLabel,
        $description: $headlessDescription,
        ...rest
    } = createHeadlessMenuItemGroup(props);

    const {
        $root: $groupMixinRoot,
        $label: $groupMixinLabel,
        $description: $groupMixinDescription,
    } = createMenuItemGroupMixin();

    const labelProps = {
        variant: 'normal',
    } as const;

    const descriptionProps = {
        variant: 'small',
    } as const;

    return {
        ...rest,
        $root: combineProps($headlessRoot, $groupMixinRoot),
        labelProps: combineProps($headlessLabel, $groupMixinLabel, labelProps),
        descriptionProps: combineProps(
            $headlessDescription,
            $groupMixinDescription,
            descriptionProps,
        ),
    };
};

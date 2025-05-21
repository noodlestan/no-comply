import { createAriaGroup } from '@noodlestan/context-ui-aria';
import { createComputedProps, mergeProps } from '@noodlestan/context-ui-primitives';
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
        options.hasSubMenus ?? Boolean(items().find(item => item.hasSubMenu()));

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

    const { $root, $label, $description } = createAriaGroup({ labelled: true });

    const $localLabel = createComputedProps({
        children: () => props.label,
    });

    const $localDescription = createComputedProps({
        children: () => props.description,
    });

    return {
        $root,
        $label: mergeProps($label, $localLabel),
        $description: mergeProps($description, $localDescription),
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
        variant: 'normal',
    } as const;

    return {
        ...rest,
        $root: mergeProps($headlessRoot, $groupMixinRoot),
        labelProps: mergeProps($headlessLabel, $groupMixinLabel, labelProps),
        descriptionProps: mergeProps(
            $headlessDescription,
            $groupMixinDescription,
            descriptionProps,
        ),
    };
};

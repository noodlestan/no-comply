import { createAriaMenu } from '@no-comply/solid-accessibility';
import { usePopoverMaybe } from '@no-comply/solid-composables';
import { computedProps, mergeProps, shortId } from '@no-comply/solid-primitives';
import { createContext, createMemo, useContext } from 'solid-js';

import { createSurface } from '../../../surface';
import { createMenuMixin } from '../../mixins';

import type {
    HeadlessMenuAPI,
    HeadlessMenuProps,
    MenuAPI,
    MenuContext,
    MenuContextOptions,
    MenuContextValue,
    MenuProps,
} from './types';

export const MenuContextCTX = createContext<MenuContextValue>();

export const useMenu = (): MenuContext => {
    const [context] = useContext(MenuContextCTX) || [];
    if (!context) {
        throw new Error('useMenu() must be wrapped in <MenuContextProvider/>');
    }

    return context;
};

export const useMenuMaybe = (): MenuContext | undefined => {
    const [context] = useContext(MenuContextCTX) || [];
    return context;
};

const createMenuContext = (props: MenuContextOptions): MenuContextValue => {
    const popover = usePopoverMaybe();

    let menuEl: HTMLElement;

    const randomId = createMemo(shortId);
    const id = () => props.id ?? randomId();

    const parentMenu = useMenuMaybe();

    const setMenuRef = (el: HTMLElement) => {
        menuEl = el;
        console.info(menuEl);
    };

    const dismissStack = () => {
        popover?.dismiss();
        parentMenu?.dismissStack();
    };

    const context: MenuContext = {
        type: 'menu',
        id,
        setMenuRef,
        dismissStack,
    };

    return [context];
};

export const createHeadlessMenu = (props: HeadlessMenuProps): HeadlessMenuAPI => {
    const contextValue = createMenuContext(props);
    const [context] = contextValue;

    const { $root: $menuRoot, $label: $ariaLabel } = createAriaMenu(props);

    const $labelStatic = {
        component: 'p' as const,
    };
    const $localLabel = computedProps($labelStatic, {
        children: () => props.label,
    });

    const $root = {
        role: 'menu',
        'data-menu': '',
    } as const;

    return {
        $root: mergeProps($menuRoot, $root),
        $label: mergeProps($ariaLabel, $localLabel),
        context,
        contextValue,
    };
};

export const createMenu = (props: MenuProps): MenuAPI => {
    const { $root, $label, contextValue } = createHeadlessMenu(props);

    const surfaceProps = {
        tag: 'div',
        variant: 'menu',
        padding: 'xs',
    } as const;
    const { surfaceProps: $surfaceRoot } = createSurface(surfaceProps);

    const { $root: $menuMixinRoot } = createMenuMixin();

    return {
        surfaceProps: mergeProps($root, $menuMixinRoot, $surfaceRoot),
        $label,
        contextValue,
    };
};

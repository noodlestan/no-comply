import { createComputedProps, mergeProps, shortId } from '@noodlestan/context-ui-primitives';
import { createFocusRing } from '@noodlestan/headless-ui';
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
    let menuEl: HTMLElement;

    const randomId = createMemo(shortId);
    const id = () => props.id ?? randomId();

    const parentMenu = useMenuMaybe();

    const setMenuRef = (el: HTMLElement) => {
        menuEl = el;
    };

    const isShown = () => menuEl?.matches(':popover-open');

    const setFocus = () => {
        if (!menuEl) {
            return;
        }
        const el = menuEl.querySelector('[data-surface]') as HTMLElement;
        if (!el) {
            return;
        }
        el.tabIndex = 0;
        el.focus();
        el.tabIndex = -1;
    };

    const onFocusOut = () => {
        if (!menuEl) {
            return;
        }
        requestAnimationFrame(() => {
            if (!menuEl.contains(document.activeElement)) {
                menuEl?.hidePopover();
            }
        });
    };

    const dismiss = () => {
        menuEl?.hidePopover();
    };

    const dismissStack = () => {
        dismiss();
        parentMenu?.dismissStack();
    };

    const context: MenuContext = {
        type: 'menu',
        id,
        isShown,
        setFocus,
        onFocusOut,
        setMenuRef,
        dismiss,
        dismissStack,
    };

    return [context];
};

export const createHeadlessMenu = (props: HeadlessMenuProps): HeadlessMenuAPI => {
    const contextValue = createMenuContext(props);
    const [context] = contextValue;

    // createAriaMenu

    const labelledby = () => {
        if (props.labelledby) {
            return props.labelledby;
        }
        if (!props.label) {
            console.error(`MenuAPI: requires label or labelledby.`);
        }
        return `${context.id()}-label`;
    };

    const $labelStatic = {
        component: 'p',
    } as const;

    const $label = createComputedProps($labelStatic, {
        id: labelledby,
        children: () => props.label,
    });

    const $focusTarget = {
        'data-popover-focus-target': '',
    } as const;

    const $rootStatic = {
        role: 'menu',
    } as const;
    const $localRoot = createComputedProps($rootStatic, {
        labelledby,
    });

    return {
        $root: $localRoot,
        $label,
        $focusTarget,
        context,
        contextValue,
    };
};

export const createMenu = (props: MenuProps): MenuAPI => {
    const { $root, $label, $focusTarget, contextValue } = createHeadlessMenu(props);

    const surfaceProps = { tag: 'div', variant: 'card', padding: 's' } as const;
    const { surfaceProps: $surfaceRoot } = createSurface(surfaceProps);

    const { $root: $focusRingRoot, $focusTarget: $focusRingTarget } = createFocusRing();
    const { $root: $menuMixinRoot } = createMenuMixin();

    return {
        surfaceProps: mergeProps($root, $menuMixinRoot, $surfaceRoot, $focusRingRoot),
        $label,
        $focusTarget: mergeProps($focusTarget, $focusRingTarget),
        contextValue,
    };
};

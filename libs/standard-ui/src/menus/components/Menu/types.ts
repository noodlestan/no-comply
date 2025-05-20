import type { BaseContext } from '@noodlestan/context-ui';
import type { FocusRingAPI } from '@noodlestan/headless-ui';
import type { Accessor } from 'solid-js';

import type { SurfaceAPI } from '../../../surface';
import type { MenuMixinAPI, MenuMixinProps } from '../../mixins';

export type MenuContextOptions = {
    id?: string;
};

export type MenuContext = BaseContext & {
    type: 'menu';
    id: Accessor<string>;
    isShown: Accessor<boolean>;
    setFocus: () => void;
    onFocusOut: () => void;
    dismiss: () => void;
    dismissStack: () => void;
    setMenuRef: (el: HTMLElement) => void;
};

export type MenuContextValue = [MenuContext];

export type HeadlessMenuProps = MenuContextOptions & {
    label?: string;
    labelledby?: string;
};

export type HeadlessMenuAPI = {
    $popover: {
        id: string;
        popover: 'auto';
        onFocusOut: () => void;
        onToggle: () => void;
        ref: MenuContext['setMenuRef'];
    };
    $root: {
        role: 'menu';
        labelledby: string;
    };
    $label: {
        component: 'p';
        id: string;
        children: string | undefined;
        'data-menu-focus-target': '';
    };
    context: MenuContext;
    contextValue: MenuContextValue;
};

export type MenuProps = HeadlessMenuProps & MenuMixinProps;

export type MenuAPI = {
    $popover: HeadlessMenuAPI['$popover'];
    surfaceProps: HeadlessMenuAPI['$root'] &
        SurfaceAPI['surfaceProps'] &
        FocusRingAPI['$root'] &
        MenuMixinAPI['$root'];
    $label: HeadlessMenuAPI['$label'];
    contextValue: MenuContextValue;
};

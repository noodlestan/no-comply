import type { AriaMenuAPI, AriaMenuProps } from '@no-comply/solid-accessibility';
import type { BaseContext } from '@no-comply/solid-contexts';
import type { Accessor } from 'solid-js';

import type { SurfaceAPI } from '../../../surface';
import type { MenuMixinAPI, MenuMixinProps } from '../../mixins';

export type MenuContextOptions = {
    id?: string;
};

export type MenuContext = BaseContext & {
    type: 'menu';
    id: Accessor<string>;
    dismissStack: () => void;
    setMenuRef: (el: HTMLElement) => void;
};

export type MenuContextValue = [MenuContext];

export type HeadlessMenuProps = MenuContextOptions & AriaMenuProps;

export type HeadlessMenuAPI = {
    $root: AriaMenuAPI['$root'];
    $label: AriaMenuAPI['$label'] & {
        component: 'p';
        children: string | undefined;
    };
    context: MenuContext;
    contextValue: MenuContextValue;
};

export type MenuProps = HeadlessMenuProps & MenuMixinProps;

export type MenuAPI = {
    surfaceProps: HeadlessMenuAPI['$root'] & SurfaceAPI['surfaceProps'] & MenuMixinAPI['$root'];
    $label: HeadlessMenuAPI['$label'];
    contextValue: MenuContextValue;
};

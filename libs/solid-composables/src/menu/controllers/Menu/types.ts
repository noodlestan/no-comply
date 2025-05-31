import type { AriaMenuAPI, AriaMenuProps } from '@no-comply/solid-accessibility';

import type { MenuContext, MenuContextOptions, MenuContextValue } from '../../private';

export type MenuProps = MenuContextOptions & AriaMenuProps;

export type MenuAPI = {
    $root: AriaMenuAPI['$root'] & {
        'data-menu': '';
    };
    $label: AriaMenuAPI['$label'] & {
        component: 'p';
        children: string | undefined;
    };
    context: MenuContext;
    contextValue: MenuContextValue;
};

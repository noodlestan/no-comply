import { createAriaMenu } from '@no-comply/solid-accessibility';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createMenuContext } from '../../private';

import type { MenuAPI, MenuProps } from './types';

export const createMenu = (props: MenuProps): MenuAPI => {
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
        $root: combineProps($menuRoot, $root),
        $label: combineProps($ariaLabel, $localLabel),
        context,
        contextValue,
    };
};

import { createAriaGroup } from '@no-comply/solid-accessibility';
import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createMenuItemGroupContext } from '../../private';

import { $MENU_ITEM_GROUP } from './constants';
import type { MenuItemGroupAPI, MenuItemGroupProps } from './types';

export const createMenuItemGroup = (props: MenuItemGroupProps): MenuItemGroupAPI => {
    const [locals, expose, compose] = createExposable($MENU_ITEM_GROUP, props);

    const contextValue = compose(createMenuItemGroupContext(locals));
    const [context] = contextValue;

    const ariaGroupProps = computedProps({
        labelled: () => Boolean(locals.label),
    });
    const { $root: $groupRoot, $label, $description, hasLabel } = createAriaGroup(ariaGroupProps);

    const $root = {
        'data-menu-item-group': '' as const,
    };

    const $localLabel = computedProps({
        children: () => locals.label,
    });

    const $localDescription = computedProps({
        children: () => locals.description,
    });

    return exposeAPI(expose, '$root', {
        $root: combineProps($groupRoot, $root),
        $label: combineProps($label, $localLabel),
        $description: combineProps($description, $localDescription),
        hasLabel,
        context,
        contextValue,
    });
};

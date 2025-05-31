import { createAriaGroup } from '@no-comply/solid-accessibility';
import { combineProps, computedProps } from '@no-comply/solid-primitives';

import { createMenuItemGroupContext } from '../../private';

import type { MenuItemGroupAPI, MenuItemGroupProps } from './types';

export const createMenuItemGroup = (props: MenuItemGroupProps): MenuItemGroupAPI => {
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

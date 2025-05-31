import { type PressEvent, combineProps, pickProps } from '@no-comply/solid-primitives';

import { createBaseMenuItem, useMenu } from '../../private';

import { MENU_ITEM_ACTION_PROPS } from './constants';
import type { MenuItemActionAPI, MenuItemActionProps } from './types';

export const createMenuItemAction = (props: MenuItemActionProps): MenuItemActionAPI => {
    const menuContext = useMenu();

    const picked = pickProps(
        props,
        MENU_ITEM_ACTION_PROPS.filter(i => i !== 'onPress'),
    );
    const menuItemBaseProps = combineProps(picked, {
        onPress: (ev: PressEvent) => {
            props.onPress?.(ev);
            if (!ev.defaultPrevented) {
                menuContext.dismissStack();
                ev.preventDefault();
                ev.stopImmediatePropagation();
            }
        },
    });

    return createBaseMenuItem(menuItemBaseProps, 'action');
};

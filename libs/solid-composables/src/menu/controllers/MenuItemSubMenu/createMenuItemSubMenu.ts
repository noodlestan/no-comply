import { createExposable, exposeAPI } from '@no-comply/solid-contexts';
import { combineProps, computedProps, shortId } from '@no-comply/solid-primitives';
import { createMemo } from 'solid-js';

import { PLACEMENT_AXIS_INLINE } from '../../../placement';
import { createAnchoredPopover } from '../../../popover';
import { createBaseMenuItem } from '../../private';

import { $MENU_ITEM_SUBMENU } from './constants';
import type { MenuItemSubMenuAPI, MenuItemSubMenuProps } from './types';

export const createMenuItemSubMenu = (props: MenuItemSubMenuProps): MenuItemSubMenuAPI => {
    const [locals, expose] = createExposable($MENU_ITEM_SUBMENU, props);

    const randomId1 = createMemo(shortId);
    const randomId2 = createMemo(shortId);
    const id = () => locals.id ?? randomId1();
    const subMenuId = () => locals.menuId ?? randomId2();

    const { $root: $baseMenuItemRoot, $label, ...rest } = createBaseMenuItem(locals, 'sub-menu');

    const anchoredPopoverProps = computedProps({
        id,
        targetId: subMenuId,
        direction: () => PLACEMENT_AXIS_INLINE,
    });
    const {
        $root: $popover,
        $trigger,
        context,
        contextValue,
    } = createAnchoredPopover(anchoredPopoverProps);

    const _subMenu = computedProps({
        id: subMenuId,
        'aria-labelledby': () => $label.id as string,
    });

    return exposeAPI(expose, '$root', {
        ...rest,
        $root: combineProps($baseMenuItemRoot, $trigger),
        $label,
        $popover,
        _subMenu,
        context,
        contextValue,
    });
};

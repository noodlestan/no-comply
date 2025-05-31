import { combineProps, computedProps, shortId } from '@no-comply/solid-primitives';
import { createMemo } from 'solid-js';

import { PLACEMENT_AXIS_INLINE } from '../../../placement';
import { createAnchoredPopover } from '../../../popover';
import { createBaseMenuItem } from '../../private';

import type { MenuItemSubMenuAPI, MenuItemSubMenuProps } from './types';

export const createMenuItemSubMenu = (props: MenuItemSubMenuProps): MenuItemSubMenuAPI => {
    const randomId1 = createMemo(shortId);
    const randomId2 = createMemo(shortId);
    const id = () => props.id ?? randomId1();
    const subMenuId = () => props.menuId ?? randomId2();

    const { $root, $label, ...rest } = createBaseMenuItem(props, 'sub-menu');

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

    const subMenuProps = computedProps({
        id: subMenuId,
        'aria-labelledby': () => $label.id as string,
    });

    return {
        ...rest,
        $root: combineProps($root, $trigger),
        $label,
        $popover,
        subMenuProps,
        context,
        contextValue,
    };
};

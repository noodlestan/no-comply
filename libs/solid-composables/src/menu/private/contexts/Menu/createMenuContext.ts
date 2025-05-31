import { shortId } from '@no-comply/solid-primitives';
import { createMemo } from 'solid-js';

import { usePopoverMaybe } from '../../../../popover';
import { useMenuMaybe } from '../../providers';

import type { MenuContext, MenuContextOptions, MenuContextValue } from './types';

export const createMenuContext = (props: MenuContextOptions): MenuContextValue => {
    const popover = usePopoverMaybe();

    let menuEl: HTMLElement;

    const randomId = createMemo(shortId);
    const id = () => props.id ?? randomId();

    const parentMenu = useMenuMaybe();

    const setMenuRef = (el: HTMLElement) => {
        menuEl = el;
        console.info(menuEl);
    };

    const dismissStack = () => {
        popover?.dismiss();
        parentMenu?.dismissStack();
    };

    const context: MenuContext = {
        type: 'menu',
        id,
        setMenuRef,
        dismissStack,
    };

    return [context];
};

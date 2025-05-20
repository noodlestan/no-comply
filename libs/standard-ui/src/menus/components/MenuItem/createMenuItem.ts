import { type PressEvent, mergeProps, pickProps } from '@noodlestan/context-ui-primitives';
import { PRESSABLE_PROPS, createFocusRing, createPressable } from '@noodlestan/headless-ui';

import type { MenuContext } from '..';
import { createMenuItemMixin } from '../../mixins';
import { useMenu } from '../Menu';

import type {
    HeadlessMenuItemAPI,
    HeadlessMenuItemProps,
    MenuItemAPI,
    MenuItemProps,
} from './types';

export const useMenuItem = (): MenuContext => {
    const context = useMenu();

    return context;
};

export const createHeadlessMenuItem = (props: HeadlessMenuItemProps): HeadlessMenuItemAPI => {
    // const setRovingFocus = (value: boolean) => console.log('set focus', value);
    // const menuContext = useMenuItem({ setRovingFocus });
    const menuContext = useMenuItem();

    // createAriaMenuItem

    const localPressableProps = pickProps(
        props,
        PRESSABLE_PROPS.filter(i => i !== 'onPress' && i !== 'role'),
    );
    const pressableProps = mergeProps(localPressableProps, {
        onPress: (ev: PressEvent) => {
            props.onPress?.(ev);
            if (!ev.defaultPrevented) {
                menuContext.dismissStack();
                ev.preventDefault();
                ev.stopImmediatePropagation();
            }
        },
    });
    const { $root: $pressableRoot } = createPressable(pressableProps, 'menuitem');

    return {
        $root: $pressableRoot,
    };
};

export const createMenuItem = (props: MenuItemProps): MenuItemAPI => {
    const { $root: $headlessMenuItem } = createHeadlessMenuItem(props);
    const { $root: $focusRingRoot } = createFocusRing();
    const { $root: $menuItemMixinRoot } = createMenuItemMixin(props);

    return {
        $root: mergeProps($headlessMenuItem, $focusRingRoot, $menuItemMixinRoot),
    };
};

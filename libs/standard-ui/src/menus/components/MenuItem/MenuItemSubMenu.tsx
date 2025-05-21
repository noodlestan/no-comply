import {
    type ClosedTagProps,
    type RenderProp,
    mergeProps,
} from '@noodlestan/context-ui-primitives';
import { PopoverContextProvider } from '@noodlestan/headless-ui';
import { ChevronRightIcon } from 'lucide-solid';
import { type Component, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Icon } from '../../../icon';
import { Popover } from '../../../popover';
import { Label, Text } from '../../../typography';

import { MENU_ITEM_SUB_MENU_PROPS } from './constants';
import { createMenuItemSubMenu } from './createMenuItem';
import type { MenuItemSubMenuAPI, MenuItemSubMenuProps } from './types';

type ChildrenProps = {
    subMenu: MenuItemSubMenuAPI['subMenuProps'];
};

type Props = ClosedTagProps &
    MenuItemSubMenuProps & {
        children: RenderProp<ChildrenProps>;
    };

export const MenuItemSubMenu: Component<Props> = props => {
    const [locals, $others] = splitProps(props, [...MENU_ITEM_SUB_MENU_PROPS, 'children']);

    const menuItem = createMenuItemSubMenu(locals);
    const {
        $root,
        $iconSlot,
        $descriptionSlot,
        $labelSlot,
        $expandSlot,
        iconProps,
        labelProps,
        descriptionProps,
        hasIcon,
        groupHasIcons,
        $popover,
        subMenuProps,
        contextValue,
    } = menuItem;
    const $ = mergeProps($others, $root);

    return (
        <PopoverContextProvider context={contextValue}>
            <Popover {...$popover}>{locals.children({ subMenu: subMenuProps })}</Popover>
            <Dynamic {...$}>
                <Show when={groupHasIcons()}>
                    <span {...$iconSlot}>{hasIcon() ? <Icon {...iconProps()} /> : undefined}</span>
                </Show>
                <span {...$labelSlot}>
                    <Label {...labelProps} />
                </span>
                <Show when={descriptionProps.children}>
                    <span {...$descriptionSlot}>
                        <Text {...descriptionProps} />
                    </span>
                </Show>
                <span {...$expandSlot}>
                    <Icon icon={ChevronRightIcon} />
                </span>
            </Dynamic>
        </PopoverContextProvider>
    );
};

import { PopoverContextProvider } from '@no-comply/solid-composables';
import { type ClosedTagProps, type RenderProp, combineProps } from '@no-comply/solid-primitives';
import { ChevronRightIcon } from 'lucide-solid';
import { type Component, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Icon } from '../../../icon';
import { Popover } from '../../../popover';
import { AlignFirstLine, Label, Text } from '../../../typography';

import { MENU_ITEM_SUB_MENU_PROPS } from './constants';
import { createMenuItemSubMenu } from './createMenuItemSubMenu';
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
    const $ = combineProps($others, $root);

    return (
        <PopoverContextProvider context={contextValue}>
            <Dynamic {...$}>
                <AlignFirstLine height={'xs'} type="action" variant={labelProps.variant}>
                    <Show when={groupHasIcons()}>
                        <span {...$iconSlot}>
                            {hasIcon() ? <Icon {...iconProps} /> : undefined}
                        </span>
                    </Show>
                    <span {...$labelSlot}>
                        <Label {...labelProps} />
                        <Show when={descriptionProps.children}>
                            <span {...$descriptionSlot}>
                                <Text {...descriptionProps} />
                            </span>
                        </Show>
                    </span>
                    <span {...$expandSlot}>
                        <Icon icon={ChevronRightIcon} />
                    </span>
                </AlignFirstLine>
            </Dynamic>
            <Popover {...$popover}>{locals.children({ subMenu: subMenuProps })}</Popover>
        </PopoverContextProvider>
    );
};

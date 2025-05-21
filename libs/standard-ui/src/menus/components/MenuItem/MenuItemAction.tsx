import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { type Component, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Icon } from '../../../icon';
import { Label, Text } from '../../../typography';

import { MENU_ITEM_ACTION_PROPS } from './constants';
import { createMenuItemAction } from './createMenuItem';
import type { MenuItemActionProps } from './types';

type Props = ClosedTagProps & MenuItemActionProps;

export const MenuItemAction: Component<Props> = props => {
    const [locals, $others] = splitProps(props, MENU_ITEM_ACTION_PROPS);

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
        groupHasSubMenus,
    } = createMenuItemAction(locals);
    const $ = mergeProps($others, $root);

    return (
        <Dynamic {...$}>
            <Show when={groupHasIcons()}>
                <span {...$iconSlot}>{hasIcon() ? <Icon {...iconProps()} /> : undefined}</span>
            </Show>
            <span {...$labelSlot}>
                <Label {...labelProps} />
                <Show when={descriptionProps.children}>
                    <span {...$descriptionSlot}>
                        <Text {...descriptionProps} />
                    </span>
                </Show>
            </span>
            <Show when={groupHasSubMenus()}>
                <span {...$expandSlot}> </span>
            </Show>
        </Dynamic>
    );
};

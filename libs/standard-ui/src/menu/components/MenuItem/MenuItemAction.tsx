import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Icon } from '../../../icon';
import { AlignFirstLine, Label, Text } from '../../../typography';

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
    const $ = combineProps($others, $root);

    return (
        <Dynamic {...$}>
            <AlignFirstLine height={'xs'} type="action" variant={labelProps.variant}>
                <Show when={groupHasIcons()}>
                    <span {...$iconSlot}>{hasIcon() ? <Icon {...iconProps} /> : undefined}</span>
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
            </AlignFirstLine>
        </Dynamic>
    );
};

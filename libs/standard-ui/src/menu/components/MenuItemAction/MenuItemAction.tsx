import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type Component, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Icon } from '../../../icon';
import { AlignFirstLine, Label, Text } from '../../../typography';

import { MENU_ITEM_ACTION_PROPS } from './constants';
import { createMenuItemAction } from './createMenuItemAction';
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
        _icon,
        _label,
        _textDescription,
        hasIcon,
        groupHasIcons,
        groupHasSubMenus,
    } = createMenuItemAction(locals);
    const $ = combineProps($others, $root);

    return (
        <Dynamic {...$}>
            <AlignFirstLine height={'xs'} type="action" variant={_label.variant}>
                <Show when={groupHasIcons()}>
                    <span {...$iconSlot}>{hasIcon() ? <Icon {..._icon} /> : undefined}</span>
                </Show>
                <span {...$labelSlot}>
                    <Label {..._label} />
                    <Show when={_textDescription.children}>
                        <span {...$descriptionSlot}>
                            <Text {..._textDescription} />
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

import { MenuItemGroupContextProvider } from '@no-comply/solid-composables';
import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
import { type ParentComponent, Show, splitProps } from 'solid-js';

import { Divider } from '../../../layout';
import { Label, Text } from '../../../typography';

import { MENU_ITEM_GROUP_PROPS } from './constants';
import { createMenuItemGroup } from './createMenuItemGroup';
import type { MenuItemGroupProps } from './types';

type Props = ClosedTagProps & MenuItemGroupProps;

export const MenuItemGroup: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, [...MENU_ITEM_GROUP_PROPS, 'children']);

    const { $root, labelProps, descriptionProps, contextValue, hasLabel } =
        createMenuItemGroup(locals);
    const $ = combineProps($others, $root);

    return (
        <MenuItemGroupContextProvider context={contextValue}>
            <div {...$}>
                <Show when={hasLabel()}>
                    <Label {...labelProps} />
                </Show>
                <Show when={descriptionProps.children}>
                    <Text {...descriptionProps} />
                </Show>
                {locals.children}
                <Divider variant="muted" data-menu-separator />
            </div>
        </MenuItemGroupContextProvider>
    );
};

import { ContextNodeProvider, createContextNode } from '@no-comply/solid-contexts';
import { type ClosedTagProps, mergeProps } from '@no-comply/solid-primitives';
import { type ParentComponent, Show, splitProps } from 'solid-js';

import { Label, Text } from '../../../typography';

import { MENU_ITEM_GROUP_PROPS } from './constants';
import { MenuItemGroupContextCTX, createMenuItemGroup } from './createMenuItemGroup';
import type { MenuItemGroupContextValue, MenuItemGroupProps } from './types';

type Props = ClosedTagProps & MenuItemGroupProps;

type MenuContextProviderProps = {
    context: MenuItemGroupContextValue;
};

export const MenuItemGroupContextProvider: ParentComponent<MenuContextProviderProps> = props => {
    const node = () => createContextNode(props.context[0]);

    return (
        // eslint-disable-next-line solid/reactivity
        <MenuItemGroupContextCTX.Provider value={props.context}>
            <ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
        </MenuItemGroupContextCTX.Provider>
    );
};

export const MenuItemGroup: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, [...MENU_ITEM_GROUP_PROPS, 'children']);

    const { $root, labelProps, descriptionProps, contextValue } = createMenuItemGroup(locals);
    const $ = mergeProps($others, $root);

    return (
        <MenuItemGroupContextProvider context={contextValue}>
            <div {...$}>
                <Label {...labelProps} />
                <Show when={descriptionProps.children}>
                    <Text {...descriptionProps} />
                </Show>
                {locals.children}
            </div>
        </MenuItemGroupContextProvider>
    );
};

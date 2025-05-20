import { ContextNodeProvider, createContextNode } from '@noodlestan/context-ui';
import { mergeProps } from '@noodlestan/context-ui-primitives';
import { type ClosedTagProps, SurfaceBase } from '@noodlestan/headless-ui';
import { type ParentComponent, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { MENU_PROPS } from './constants';
import { MenuContextCTX, createMenu } from './createMenu';
import type { MenuContextValue, MenuProps } from './types';

type Props = ClosedTagProps & MenuProps;

type MenuContextProviderProps = {
    context: MenuContextValue;
};

export const MenuContextProvider: ParentComponent<MenuContextProviderProps> = props => {
    const node = () => createContextNode(props.context[0]);

    return (
        <MenuContextCTX.Provider value={props.context}>
            <ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
        </MenuContextCTX.Provider>
    );
};

export const Menu: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, [...MENU_PROPS, 'children']);

    const { surfaceProps, $popover, $label, contextValue } = createMenu(locals);
    const $ = mergeProps($others, surfaceProps);

    return (
        <MenuContextProvider context={contextValue}>
            <div {...$popover}>
                <SurfaceBase {...$}>
                    <Show when={$label.children}>
                        <Dynamic {...$label} />
                    </Show>
                    <Show when={!$label.children}>
                        <span data-menu-focus-target />
                    </Show>
                    {locals.children}
                </SurfaceBase>
            </div>
        </MenuContextProvider>
    );
};

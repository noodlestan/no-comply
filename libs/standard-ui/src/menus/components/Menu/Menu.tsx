import { ContextNodeProvider, createContextNode } from '@noodlestan/context-ui';
import { type ClosedTagProps, mergeProps } from '@noodlestan/context-ui-primitives';
import { SurfaceBase } from '@noodlestan/headless-ui';
import { type ParentComponent, Show, splitProps } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { MENU_PROPS } from './constants';
import { MenuContextCTX, createMenu } from './createMenu';
import type { MenuContextValue, MenuProps } from './types';

type MenuContextProviderProps = {
    context: MenuContextValue;
};

export const MenuContextProvider: ParentComponent<MenuContextProviderProps> = props => {
    const node = () => createContextNode(props.context[0]);

    return (
        // eslint-disable-next-line solid/reactivity
        <MenuContextCTX.Provider value={props.context}>
            <ContextNodeProvider node={node()}>{props.children}</ContextNodeProvider>
        </MenuContextCTX.Provider>
    );
};

type Props = ClosedTagProps & MenuProps;

export const Menu: ParentComponent<Props> = props => {
    const [locals, $others] = splitProps(props, [...MENU_PROPS, 'children']);

    const { surfaceProps, $label, $focusTarget, contextValue } = createMenu(locals);
    const $ = mergeProps($others, surfaceProps);

    return (
        <MenuContextProvider context={contextValue}>
            <SurfaceBase {...$}>
                <Show when={$label.children}>
                    <Dynamic {...$label} {...$focusTarget} />
                </Show>
                <Show when={!$label.children}>
                    <span {...$focusTarget} />
                </Show>
                {locals.children}
            </SurfaceBase>
        </MenuContextProvider>
    );
};

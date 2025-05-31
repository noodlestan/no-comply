import { SurfaceBase } from '@no-comply/solid-composables';
import { ContextNodeProvider, createContextNode } from '@no-comply/solid-contexts';
import { type ClosedTagProps, combineProps } from '@no-comply/solid-primitives';
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

    const { surfaceProps, $label, contextValue } = createMenu(locals);
    const $ = combineProps($others, surfaceProps);

    return (
        <MenuContextProvider context={contextValue}>
            <SurfaceBase {...$}>
                <Show when={$label.children}>
                    <Dynamic {...$label} />
                </Show>
                {locals.children}
            </SurfaceBase>
        </MenuContextProvider>
    );
};

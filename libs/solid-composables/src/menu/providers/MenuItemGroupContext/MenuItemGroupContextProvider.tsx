import { ContextNodeProvider, createContextNode } from '@no-comply/solid-contexts';
import type { ParentComponent } from 'solid-js';

import { MenuItemGroupContextCTX, type MenuItemGroupContextValue } from '../../private';

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

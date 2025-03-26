import type { Component, JSX } from 'solid-js';

import { ContextsContext } from './private';
import type { ContextsService } from './types';

type SettingsProviderProps = {
    contextsService: ContextsService;
    children?: JSX.Element;
};

export const ContextsProvider: Component<SettingsProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <ContextsContext.Provider value={props.contextsService}>
            {props.children}
        </ContextsContext.Provider>
    );
};

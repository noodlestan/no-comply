import { Component, JSX } from 'solid-js';

import { ContextsContext } from './private';
import { ContextsService } from './types';

type SettingsProviderProps = {
    contexts: ContextsService;
    children?: JSX.Element;
};

export const ContextsProvider: Component<SettingsProviderProps> = props => {
    return (
        <ContextsContext.Provider value={props.contexts}>{props.children}</ContextsContext.Provider>
    );
};

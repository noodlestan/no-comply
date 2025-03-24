import type { Component, JSX } from 'solid-js';

import { type SystemContextServiceAPI, createSystemContextService } from '../services';

import { SystemContext } from './private';

type SystemContextProviderProps = {
    systemContextService?: SystemContextServiceAPI;
    children?: JSX.Element;
};

export const SystemContextProvider: Component<SystemContextProviderProps> = props => {
    // eslint-disable-next-line solid/reactivity
    const service = props.systemContextService ?? createSystemContextService();
    return <SystemContext.Provider value={service}>{props.children}</SystemContext.Provider>;
};

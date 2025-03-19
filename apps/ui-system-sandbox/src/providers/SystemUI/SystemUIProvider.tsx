import { Component, JSX } from 'solid-js';

import { SystemUIContext } from './private';
import { SystemUIContextAPI } from './types';

type SystemUIProviderProps = {
    systemUI: SystemUIContextAPI;
    children?: JSX.Element;
};

export const SystemUIProvider: Component<SystemUIProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <SystemUIContext.Provider value={props.systemUI}>{props.children}</SystemUIContext.Provider>
    );
};

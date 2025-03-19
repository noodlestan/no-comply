import { Component, JSX } from 'solid-js';

import { AppServicesContext } from './private';
import { AppServicesAPI } from './types';

type AppServicesProviderProps = {
    appServices: AppServicesAPI;
    children?: JSX.Element;
};

export const AppServicesProvider: Component<AppServicesProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <AppServicesContext.Provider value={props.appServices}>
            {props.children}
        </AppServicesContext.Provider>
    );
};

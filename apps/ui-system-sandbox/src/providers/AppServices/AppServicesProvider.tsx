import { Component, JSX } from 'solid-js';

import { AppServicesContext } from './private/AppServicesContext';
import { AppServicesAPI } from './types';

type AppServicesProviderProps = {
    value: AppServicesAPI;
    children?: JSX.Element;
};

export const AppServicesProvider: Component<AppServicesProviderProps> = props => {
    return (
        <AppServicesContext.Provider value={props.value}>
            {props.children}
        </AppServicesContext.Provider>
    );
};

import { Component, JSX } from 'solid-js';

import { SettingsContext } from './private';
import { SettingsAPI } from './types';

type SettingsProviderProps = {
    settings: SettingsAPI;
    children?: JSX.Element;
};

export const SettingsProvider: Component<SettingsProviderProps> = props => {
    return (
        <SettingsContext.Provider value={props.settings}>{props.children}</SettingsContext.Provider>
    );
};

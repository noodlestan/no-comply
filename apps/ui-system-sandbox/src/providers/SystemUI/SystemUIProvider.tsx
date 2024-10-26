import { SettingsAPI, SettingsProvider } from '@noodlestan/ui-system';
import { Component, JSX } from 'solid-js';

import { SystemUIContext } from './private/SystemUIContext';
import { SystemUIContextState } from './types';

type SystemUIProviderProps = SystemUIContextState & {
    themeSettings: SettingsAPI;
    children?: JSX.Element;
};

export const SystemUIProvider: Component<SystemUIProviderProps> = props => {
    return (
        <SystemUIContext.Provider value={props}>
            <SettingsProvider settings={props.themeSettings}>{props.children}</SettingsProvider>
        </SystemUIContext.Provider>
    );
};

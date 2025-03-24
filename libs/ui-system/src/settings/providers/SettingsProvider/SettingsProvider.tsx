import type { Component, JSX } from 'solid-js';

import type { SettingsServiceAPI } from '../../services';

import { SettingsContext } from './private';

type SettingsProviderProps = {
    settings: SettingsServiceAPI;
    children?: JSX.Element;
};

export const SettingsProvider: Component<SettingsProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <SettingsContext.Provider value={props.settings}>{props.children}</SettingsContext.Provider>
    );
};

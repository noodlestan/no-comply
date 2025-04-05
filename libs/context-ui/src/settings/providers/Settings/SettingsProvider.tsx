import type { ParentComponent } from 'solid-js';

import type { SettingsServiceAPI } from '../../services';

import { SettingsContext } from './private';

type SettingsProviderProps = {
    settings: SettingsServiceAPI;
};

export const SettingsProvider: ParentComponent<SettingsProviderProps> = props => {
    return (
        // eslint-disable-next-line solid/reactivity
        <SettingsContext.Provider value={props.settings}>{props.children}</SettingsContext.Provider>
    );
};

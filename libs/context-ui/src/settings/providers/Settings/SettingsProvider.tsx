/* eslint-disable solid/reactivity */
import type { ParentComponent } from 'solid-js';

import type { SettingsServiceAPI } from '../../services';

import { SettingsContext } from './private';

type SettingsProviderProps = {
    service: SettingsServiceAPI;
};

export const SettingsProvider: ParentComponent<SettingsProviderProps> = props => {
    return (
        <SettingsContext.Provider value={props.service}>{props.children}</SettingsContext.Provider>
    );
};

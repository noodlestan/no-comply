import { useContext } from 'solid-js';

import { SettingsContext } from './private';
import { SettingsAPI } from './types';

export const useSettings = (): SettingsAPI => {
    const api = useContext(SettingsContext);
    if (!('getValue' in api)) {
        throw new Error('useSettings() must be wrapped in <SettingsProvider/>');
    }

    return api;
};

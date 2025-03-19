import { useContext } from 'solid-js';

import { SettingsContext } from './private';
import { SettingsAPI } from './types';

export const useSettings = (): SettingsAPI => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings() must be wrapped in <SettingsProvider/>');
    }

    return context;
};

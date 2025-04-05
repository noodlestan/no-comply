import { useContext } from 'solid-js';

import type { SettingsServiceAPI } from '../../services';

import { SettingsContext } from './private';

export const useSettings = (): SettingsServiceAPI => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings() must be wrapped in <SettingsProvider/>');
    }

    return context;
};

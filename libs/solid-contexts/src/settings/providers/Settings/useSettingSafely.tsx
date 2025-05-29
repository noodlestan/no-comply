import { useContext } from 'solid-js';

import type { Setting, SettingValue } from '../../services';

import { SettingsContext } from './private';

export const useSettingSafely = <T extends SettingValue = SettingValue>(setting: Setting): T => {
    const context = useContext(SettingsContext);

    if (context) {
        try {
            return context?.getValue(setting) as T;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            return setting.defaultValue as T;
        }
    }

    return setting.defaultValue as T;
};

import { useContext } from 'solid-js';

import type { Setting, SettingValue } from '../../services';

import { SettingsContext } from './private';

export const useSettingSafely = (setting: Setting): SettingValue => {
    const context = useContext(SettingsContext);

    if (context) {
        try {
            return context?.getValue(setting);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            return setting.defaultValue;
        }
    }

    return setting.defaultValue;
};

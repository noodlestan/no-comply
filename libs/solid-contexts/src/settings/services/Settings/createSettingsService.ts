import { ReactiveMap } from '@solid-primitives/map';
import { createStore } from 'solid-js/store';

import type { Setting, SettingGroup, SettingValue, SettingsServiceAPI } from './types';

export const createSettingsService = (initialSettings?: Setting[]): SettingsServiceAPI => {
    const [settings, setSettings] = createStore<Setting[]>(initialSettings ?? []);
    const groups = new ReactiveMap<string, SettingGroup>();

    const addSettings = (moreSettings: Setting[]): void => {
        moreSettings.forEach(newSetting => {
            const index = settings.findIndex(setting => setting.id === newSetting.id);
            if (index !== -1) {
                setSettings(index, newSetting);
            } else {
                setSettings([...settings, newSetting]);
            }
        });
    };

    const addGroups = (moreGroups: SettingGroup[]): void => {
        moreGroups.forEach(group => groups.set(group.key, group));
    };

    const getGroups = (): SettingGroup[] => {
        return Array.from(groups.values()).sort((a, b) => a.order - b.order);
    };

    const getSettings = (key?: string): Setting[] => {
        return Array.from(settings.values()).filter(setting => !key || setting.id.startsWith(key));
    };

    const getSetting = (id: string): Setting => {
        const setting = settings.find(setting => setting.id === id);
        if (!setting) {
            throw new Error(`Setting "${id}" not found.`);
        }
        return setting;
    };

    const getValue = (idOrSetting: string | Setting): SettingValue => {
        const id = typeof idOrSetting === 'string' ? idOrSetting : idOrSetting.id;
        const setting = getSetting(id);
        return setting.value !== undefined ? setting.value : setting.defaultValue;
    };

    const setValue = (id: string, value: SettingValue): void => {
        const index = settings.findIndex(setting => setting.id === id);
        if (index === -1) {
            throw new Error(`Setting "${id}" not found.`);
        }
        setSettings(index, 'value', value);
    };

    addSettings(initialSettings ?? []);

    const api: SettingsServiceAPI = {
        addSettings,
        addGroups,
        getSettings,
        getGroups,
        getValue,
        setValue,
    };

    return api;
};

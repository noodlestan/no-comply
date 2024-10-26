import { IconComponent, IconMap } from '../../types';

import { IconsAPI } from './types';

export const createIcons = (): IconsAPI => {
    console.info('createIcons()');

    const iconMap: IconMap = {};

    const addIcon = (name: string, icon: IconComponent): void => {
        iconMap[name] = icon;
    };

    const addIcons = (map: IconMap): void => {
        for (const key in map) {
            iconMap[key] = map[key];
        }
    };

    const getIcon = (name: string): IconComponent => {
        if (!(name in iconMap)) {
            throw new Error(`Unknown icon "${name}".`);
        }
        return iconMap[name];
    };

    const api: IconsAPI = {
        addIcon,
        addIcons,
        getIcon,
    };

    return api;
};

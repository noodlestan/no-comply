import { IconComponent, IconMap } from '../../types';

export type IconsAPI = {
    addIcon: (name: string, icon: IconComponent) => void;
    addIcons: (map: IconMap) => void;
    getIcon: (name: string) => IconComponent;
};

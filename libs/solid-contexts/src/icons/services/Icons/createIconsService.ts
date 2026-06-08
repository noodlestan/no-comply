import type { IconComponent } from '../../types';

import type { IconsServiceAPI } from './types';

export const createIconsService = (): IconsServiceAPI => {
	const iconMap: Record<string, IconComponent> = {};

	const addIcon = (name: string, icon: IconComponent): void => {
		iconMap[name] = icon;
	};

	const addIcons = (map: Record<string, IconComponent>): void => {
		for (const key in map) {
			iconMap[key] = map[key] as IconComponent;
		}
	};

	const getIcon = (name: string): IconComponent => {
		if (!(name in iconMap)) {
			throw new Error(`Unknown icon "${name}".`);
		}
		return iconMap[name] as IconComponent;
	};

	const api: IconsServiceAPI = {
		addIcon,
		addIcons,
		getIcon,
	};

	return api;
};

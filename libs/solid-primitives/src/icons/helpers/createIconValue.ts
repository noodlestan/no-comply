import type { IconComponent, IconValue } from '../types';

export const createIconValue = (icon: IconComponent): IconValue => {
	return {
		component: icon,
	};
};

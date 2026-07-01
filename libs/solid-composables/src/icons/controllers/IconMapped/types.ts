import type { IconComponent, IconMap } from '@no-comply/solid-primitives';

export type IconMappedProps = {
	key: string;
	map: IconMap;
};

export type IconMappedAPI = {
	_icon: {
		icon: IconComponent;
	};
};

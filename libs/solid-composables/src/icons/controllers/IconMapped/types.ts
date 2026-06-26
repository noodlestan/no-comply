import type { IconComponent, IconMap } from '@no-comply/solid-contexts';

export type IconMappedProps = {
	key: string;
	map: IconMap;
};

export type IconMappedAPI = {
	_icon: {
		icon: IconComponent;
	};
};

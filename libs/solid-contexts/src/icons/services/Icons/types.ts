import type { IconComponent } from '@no-comply/solid-primitives';

export type IconsServiceAPI = {
	addIcon: (name: string, icon: IconComponent) => void;
	addIcons: (map: Record<string, IconComponent>) => void;
	getIcon: (name: string) => IconComponent;
};

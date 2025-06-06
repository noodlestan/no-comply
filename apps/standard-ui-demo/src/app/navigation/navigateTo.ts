import type { ComponentName } from '../../data';

const url = (path: string) => path;

export const routeFor = {
	home: (): string => url(`/`),
	showcase: (screen: string = ''): string => url(`/app/${screen}`),
	feature: (name: string): string => url(`/features/${name}`),
	component: (name: ComponentName): string => url(`/features/components/${name}`),
	calibration: (name: string = ''): string => url(`/calibration/${name}`),
	settings: (): string => url(`/settings`),
};

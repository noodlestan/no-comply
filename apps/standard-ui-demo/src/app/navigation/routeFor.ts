import type { ComponentName } from '../../data';

const url = (path: string) => path;

export const routeFor = {
	home: (): string => url(`/`),
	showcase: (screen: string = ''): string => url(`/app/${screen}`),
	feature: (name: string): string => url(`/features/${name}`),
	component: (name: ComponentName): string => url(`/features/components/${name}`),
	resources: (name: string = ''): string => url(`/resources/${name}`),
	api: (): string => url(`/api`),
	package: (pkg: string): string => url(`/api/${pkg}`),
	module: (pkg: string, mod: string): string => url(`/api/${pkg}/${mod}`),
	entity: (pkg: string, mod: string, type: string, ent: string): string =>
		url(`/api/${pkg}/${mod}/${type}/${ent}`),
	settings: (): string => url(`/settings`),
};

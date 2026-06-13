import type { NoComplyEntityData } from '@no-comply/meta';

const url = (path: string) => path;

export const routeFor = {
	home: (): string => url(`/`),
	showcase: (screen: string = ''): string => url(`/app/${screen}`),
	feature: (name: string): string => url(`/features/${name}`),
	component: (name: string): string => url(`/features/components/${name}`),
	resources: (name: string = ''): string => url(`/resources/${name}`),
	api: (path?: string): string => (path ? url(`/api/${path}`) : url(`/api`)),
	package: (pkg: string): string => url(`/api/${pkg}`),
	module: (pkg: string, mod: string): string => url(`/api/${pkg}/${mod}`),
	entity: (
		entOrPkg: NoComplyEntityData | string,
		mod?: string,
		type?: string,
		ent?: string,
	): string => {
		if (typeof entOrPkg === 'string') {
			return url(`/api/${entOrPkg}/${mod}/${type}/${ent}`);
		}
		const { package: pkg, module, type: t, name } = entOrPkg;
		if (!module) {
			return url(`/api/${pkg}/${name}`);
		}
		return url(`/api/${pkg}/${module}/${t}/${name}`);
	},
	entitySymbol: (ent: NoComplyEntityData, symbol: string): string => {
		const route = routeFor.entity(ent);
		return url(`${route}#${symbol}`);
	},
	settings: (): string => url(`/settings`),
};

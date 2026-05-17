import type { ModuleEntityData, NoComplyEntityData } from '@no-comply/meta-entities';

import { indexEntities } from './private';
import type { NoComplyMetaAPI } from './types';

export function createNoComplyMetaService(entities: NoComplyEntityData[]): NoComplyMetaAPI {
	const index = indexEntities(entities);

	const getEntities = (): NoComplyEntityData[] => {
		return [...entities];
	};

	const getEntityMaybe = <T extends NoComplyEntityData>(
		pkg: string,
		type: string,
		name: string,
	): T | undefined => {
		return index[pkg]?.[type]?.[name] as T | undefined;
	};

	const getEntity = <T extends NoComplyEntityData>(pkg: string, type: string, name: string): T => {
		const entity = getEntityMaybe(pkg, type, name);
		if (!entity) {
			throw new Error(`Unknown entity ${pkg}/${name} of type ${type}.`);
		}
		return entity as T;
	};

	const getPackageNames = () => {
		return Object.keys(index);
	};

	const hasPackage = (pkg: string) => {
		return getPackageNames().includes(pkg);
	};

	const getPackageModuleNames = (pkg: string) => {
		const all = entities
			.filter(ent => ent.package === pkg && ent.type === 'module')
			.map(ent => ent.name)
			.filter(Boolean) as string[];

		return [...new Set(all)];
	};

	const packageHasModule = (pkg: string, mod: string) => {
		return getPackageModuleNames(pkg).includes(mod);
	};

	const getModuleMaybe = (pkg: string, mod: string) => {
		// eslint-disable-next-line dot-notation
		return index[pkg]?.['module']?.[mod] as ModuleEntityData | undefined;
	};

	const getModuleSubModuleNames = (pkg: string, mod: string) => {
		// eslint-disable-next-line dot-notation
		const entities = Object.values(index[pkg]?.['module'] || {});
		return entities.filter(ent => ent.module === mod && ent.type === 'module').map(e => e.name);
	};

	const getModuleEntities = (pkg: string, mod: string) => {
		// eslint-disable-next-line dot-notation
		const byType = Object.values(index[pkg] || {});

		return byType.map(byName => Object.values(byName).filter(ent => ent.module === mod)).flat();
	};

	return {
		getEntities,
		getEntityMaybe,
		getEntity,
		hasPackage,
		getPackageNames,
		getPackageModuleNames,
		packageHasModule,
		getModuleMaybe,
		getModuleSubModuleNames,
		getModuleEntities,
	};
}

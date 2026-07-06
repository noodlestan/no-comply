import type { EntityDataBase } from '@purrception/primitives';

import type { ModuleEntityData, NoComplyEntityData } from './entities';
import {
	buildSearchEntityRecords,
	indexEntities,
	matchEntityByImport,
	resolveEntityExpressionParts,
	resolveSymbolImport,
	searchEntityRecords,
} from './private';
import type { ResolvedExpression } from './private';
import type { NoComplyMetaAPI, NoComplyMetaOptions, SearchEntityResult } from './types';

export function createNoComplyMetaService(
	entities: NoComplyEntityData[],
	options: NoComplyMetaOptions = {},
): NoComplyMetaAPI {
	const { makeEntityHref } = options;
	const index = indexEntities(entities);
	const searchRecords = buildSearchEntityRecords(entities);

	const getEntities = (): NoComplyEntityData[] => {
		return [...entities];
	};

	const searchEntities = (terms: string): SearchEntityResult[] => {
		return searchEntityRecords(searchRecords, terms);
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

	const resolveSymbolEntity = (
		e: EntityDataBase,
		token: string,
	): NoComplyEntityData | undefined => {
		const entity = e as NoComplyEntityData;
		const result = resolveSymbolImport(entity, token);

		if (result.status === 'local') {
			return entity;
		}

		if (result.status === 'unknown') {
			console.warn(`Unresolved ${result.errorId} (unknown symbol).`);
			return undefined;
		}

		const targetEntity = matchEntityByImport(
			entity,
			result.symbol,
			result.isLocalPackage,
			getEntities,
		);

		if (!targetEntity) {
			console.warn(`Unresolved ${result.errorId} (no entity matched).`);
			return undefined;
		}

		return targetEntity;
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

	const matchExpression = (resolved: ResolvedExpression): NoComplyEntityData | undefined => {
		const { pkg, type, name } = resolved;

		if (pkg && type) {
			return index[pkg]?.[type]?.[name] as NoComplyEntityData | undefined;
		}
		if (type) {
			return entities.find(e => e.type === type && e.name === name);
		}
		if (pkg) {
			return entities.find(e => e.package === pkg && e.name === name);
		}
		return entities.find(e => e.name === name);
	};

	const resolveEntityExpression = (expression: string): NoComplyEntityData | undefined => {
		const resolved = resolveEntityExpressionParts(expression);
		const entity = matchExpression(resolved);

		if (!entity) {
			console.warn(`Could not resolve link for "${expression}"`);
			return undefined;
		}

		return entity;
	};

	const resolveLink = (text: string): [displayName: string, href: string] | undefined => {
		if (!makeEntityHref) {
			return [text, text];
		}
		const [entityNameExpression, symbol] = text.split('#');
		const entity = resolveEntityExpression(entityNameExpression as string);
		if (!entity) {
			return undefined;
		}
		const href = makeEntityHref(entity, symbol || undefined);
		return [symbol ?? entity.name, href];
	};

	return {
		getEntities,
		searchEntities,
		getEntityMaybe,
		getEntity,
		resolveSymbolEntity,
		getPackageNames,
		hasPackage,
		getPackageModuleNames,
		packageHasModule,
		getModuleMaybe,
		getModuleSubModuleNames,
		getModuleEntities,
		resolveEntityExpression,
		resolveLink,
	};
}

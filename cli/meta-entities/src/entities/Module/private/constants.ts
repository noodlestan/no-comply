import type { EntityFileResolver, EntityMetaMatcher } from '../../../heuristics';
import { findHelperFiles, findTypesFile } from '../../../utils';
import type { ModuleEntityFiles, ModuleEntityPartial } from '../types';

export const MATCHER: EntityMetaMatcher<ModuleEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)$/);
	if (!match) {
		return;
	}

	const name = match[1];

	return {
		type: 'module',
		...ctx.fsContext.meta,
		name,
	};
};

export const RESOLVER: EntityFileResolver<ModuleEntityFiles> = async ctx => {
	const types = findTypesFile(ctx);
	const helpers = await findHelperFiles(ctx);

	return {
		types,
		helpers: helpers || [],
	};
};

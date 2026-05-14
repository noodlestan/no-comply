import path from 'path';

import type { EntityFileResolver, EntityMetaMatcher } from '../../../heuristics';
import { findFactoryFile, findHookFiles, findTypesFile } from '../../../utils';
import type { ProviderEntityFiles, ProviderEntityPartial } from '../types';

export const MATCHER: EntityMetaMatcher<ProviderEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/providers\//);
	if (!match) {
		return;
	}
	const module = match[1];
	const name = path.basename(ctx.dirMeta.path);
	return {
		type: 'provider',
		...ctx.fsContext.meta,
		name,
		module,
	};
};

export const RESOLVER: EntityFileResolver<ProviderEntityFiles> = async ctx => {
	const implementation = findFactoryFile(ctx);
	const types = findTypesFile(ctx);
	const hooks = findHookFiles(ctx);

	if (!implementation || !types) {
		return;
	}

	return {
		implementation,
		hooks,
	};
};

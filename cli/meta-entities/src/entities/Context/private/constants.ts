import path from 'path';

import type { EntityFileResolver, EntityMetaMatcher } from '../../../heuristics';
import { findFactoryFile, findTypesFile } from '../../../utils';
import type { ContextEntityFiles, ContextEntityPartial } from '../types';

export const MATCHER: EntityMetaMatcher<ContextEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/contexts\//);
	if (!match) {
		return;
	}

	const module = match[1];
	const name = path.basename(ctx.dirMeta.path);
	return {
		type: 'context',
		...ctx.fsContext.meta,
		name,
		module,
	};
};

export const RESOLVER: EntityFileResolver<ContextEntityFiles> = async ctx => {
	const implementation = findFactoryFile(ctx);
	if (!implementation) {
		return;
	}

	const types = findTypesFile(ctx);
	return {
		implementation,
		types,
	};
};

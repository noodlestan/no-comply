import path from 'path';

import type { EntityFileResolver, EntityMetaMatcher } from '../../../heuristics';
import { findComponentFile, findFactoryFile, findTypesFile } from '../../../utils';
import type { ComponentEntityFiles, ComponentEntityPartial } from '../types';

export const MATCHER: EntityMetaMatcher<ComponentEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/components\//);
	if (!match) {
		return;
	}

	const module = match[1];
	const name = path.basename(ctx.dirMeta.path);
	return {
		type: 'component',
		...ctx.fsContext.meta,
		name,
		module,
	};
};

export const RESOLVER: EntityFileResolver<ComponentEntityFiles> = async ctx => {
	const implementation = findComponentFile(ctx);
	const factory = findFactoryFile(ctx);
	const types = findTypesFile(ctx);
	if (!implementation || !factory || !types) {
		return;
	}

	return {
		implementation,
		factory,
		types,
	};
};

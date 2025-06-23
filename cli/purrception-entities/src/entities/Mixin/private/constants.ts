import path from 'path';

import type { EntityFileResolver, EntityMetaMatcher } from '../../../heuristics';
import { findFactoryFile, findTypesFile } from '../../../utils';
import type { MixinEntityFiles, MixinEntityPartial } from '../types';

export const MATCHER: EntityMetaMatcher<MixinEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/mixins\//);
	if (!match) {
		return;
	}

	const module = match[1];
	const name = path.basename(ctx.dirMeta.path);

	return {
		type: 'mixin',
		name,
		module,
	};
};

export const RESOLVER: EntityFileResolver<MixinEntityFiles> = async ctx => {
	const implementation = findFactoryFile(ctx);
	const types = findTypesFile(ctx);

	if (!implementation || !types) {
		return;
	}

	return {
		implementation,
		types,
	};
};

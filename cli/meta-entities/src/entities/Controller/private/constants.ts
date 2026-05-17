import path from 'path';

import type { EntityFileResolver, EntityMetaMatcher } from '@purrception/source-fs';

import { findFactoryFile, findTypesFile } from '../../../utils';
import type { ControllerEntityFiles, ControllerEntityPartial } from '../types';

export const MATCHER: EntityMetaMatcher<ControllerEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/controllers\//);
	if (!match) {
		return;
	}
	const module = match[1];
	const name = path.basename(ctx.dirMeta.path);
	return {
		type: 'controller',
		name,
		module,
		// eslint-disable-next-line dot-notation
		package: ctx.fsContext.meta['package'] as string,
	};
};

export const RESOLVER: EntityFileResolver<ControllerEntityFiles> = async ctx => {
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

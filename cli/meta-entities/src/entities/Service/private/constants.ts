import path from 'path';

import type { EntityFileResolver, EntityMetaMatcher } from '@purrception/source-fs';

import { findFactoryFile, findTypesFile } from '../../../utils';
import type { ServiceEntityFiles, ServiceEntityPartial } from '../types';

export const MATCHER: EntityMetaMatcher<ServiceEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/services\//);
	if (!match) {
		return;
	}
	const module = match[1];
	const name = path.basename(ctx.dirMeta.path);
	return {
		type: 'service',
		name,
		module,
		// eslint-disable-next-line dot-notation
		package: ctx.fsContext.meta['package'] as string,
	};
};

export const RESOLVER: EntityFileResolver<ServiceEntityFiles> = async ctx => {
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

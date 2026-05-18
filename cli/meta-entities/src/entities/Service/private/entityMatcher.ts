import path from 'path';

import type { EntityMetaMatcher } from '@purrception/source-fs';

import type { ServiceEntityPartial } from '../types';

export const entityMatcher: EntityMetaMatcher<ServiceEntityPartial> = async ctx => {
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
		path: ctx.dirMeta.path,
	};
};

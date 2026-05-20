import path from 'path';

import type { EntityMetaMatcher } from '@purrception/source-fs';

import type { ContextEntityPartial } from '../types';

export const entityMatcher: EntityMetaMatcher<ContextEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/contexts\//);
	if (!match) {
		return;
	}

	const module = match[1];
	const name = path.basename(ctx.dirMeta.path);
	return {
		type: 'context',
		name,
		// eslint-disable-next-line dot-notation
		package: ctx.fsContext.meta['package'] as string,
		module,
		path: ctx.dirMeta.path,
	};
};

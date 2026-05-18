import path from 'path';

import type { EntityMetaMatcher } from '@purrception/source-fs';

import type { ProviderEntityPartial } from '../types';

export const entityMatcher: EntityMetaMatcher<ProviderEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/providers\//);
	if (!match) {
		return;
	}
	const module = match[1];
	const name = path.basename(ctx.dirMeta.path);
	return {
		type: 'provider',
		name,
		module,
		// eslint-disable-next-line dot-notation
		package: ctx.fsContext.meta['package'] as string,
		path: ctx.dirMeta.path,
	};
};

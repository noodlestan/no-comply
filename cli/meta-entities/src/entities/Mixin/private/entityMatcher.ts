import path from 'path';

import type { EntityMetaMatcher } from '@purrception/source-fs';

import type { MixinEntityPartial } from '../types';

export const entityMatcher: EntityMetaMatcher<MixinEntityPartial> = async ctx => {
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
		// eslint-disable-next-line dot-notation
		package: ctx.fsContext.meta['package'] as string,
		path: ctx.dirMeta.path,
	};
};

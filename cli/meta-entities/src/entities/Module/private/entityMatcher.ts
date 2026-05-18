import type { EntityMetaMatcher } from '@purrception/source-fs';

import type { ModuleEntityPartial } from '../types';

export const entityMatcher: EntityMetaMatcher<ModuleEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)$/);
	if (!match) {
		return;
	}

	const name = match[1];

	return {
		type: 'module',
		name,
		module: '',
		// eslint-disable-next-line dot-notation
		package: ctx.fsContext.meta['package'] as string,
		path: ctx.dirMeta.path,
	};
};

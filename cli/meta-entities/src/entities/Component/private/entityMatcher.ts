import path from 'path';

import type { EntityMetaMatcher } from '@purrception/source-fs';

import type { ComponentEntityPartial } from '../types';

export const entityMatcher: EntityMetaMatcher<ComponentEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/components\//);
	if (!match) {
		return;
	}

	const module = match[1];
	const name = path.basename(ctx.dirMeta.path);
	return {
		type: 'component',
		name,
		module,
		// eslint-disable-next-line dot-notation
		package: ctx.fsContext.meta['package'] as string,
		path: ctx.dirMeta.path,
	};
};

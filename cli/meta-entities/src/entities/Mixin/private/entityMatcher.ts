import path from 'path';

import type { MixinEntityPartial } from '@no-comply/meta';
import type { EntityMetaMatcher } from '@purrception/source-fs';

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
		// eslint-disable-next-line dot-notation
		package: ctx.fsContext.meta['package'] as string,
		module,
		path: ctx.dirMeta.path,
	};
};

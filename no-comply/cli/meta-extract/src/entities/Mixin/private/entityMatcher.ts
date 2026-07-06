import path from 'path';

import { type MixinEntityPartial, createMixinEntityPartial } from '@no-comply/meta';
import { createEntityPartial } from '@purrception/primitives';
import type { EntityMetaMatcher } from '@purrception/source-fs';

export const entityMatcher: EntityMetaMatcher<MixinEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/mixins\//);
	if (!match) {
		return;
	}

	const name = path.basename(ctx.dirMeta.path);
	// eslint-disable-next-line dot-notation
	const packageName = ctx.fsContext.meta['package'] as string;
	const partial = createEntityPartial('mixin', name, packageName);

	const moduleName = match[1];
	return createMixinEntityPartial(partial, moduleName, ctx.dirMeta.path);
};

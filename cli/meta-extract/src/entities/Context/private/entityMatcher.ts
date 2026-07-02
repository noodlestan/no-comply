import path from 'path';

import { type ContextEntityPartial, createContextEntityPartial } from '@no-comply/meta';
import { createEntityPartial } from '@purrception/primitives';
import type { EntityMetaMatcher } from '@purrception/source-fs';

export const entityMatcher: EntityMetaMatcher<ContextEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/contexts\//);
	if (!match) {
		return;
	}

	const name = path.basename(ctx.dirMeta.path);
	// eslint-disable-next-line dot-notation
	const packageName = ctx.fsContext.meta['package'] as string;
	const partial = createEntityPartial('context', name, packageName);

	const moduleName = match[1];
	return createContextEntityPartial(partial, moduleName, ctx.dirMeta.path);
};

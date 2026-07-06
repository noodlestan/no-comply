import path from 'path';

import { type ProviderEntityPartial, createProviderEntityPartial } from '@no-comply/meta';
import { createEntityPartial } from '@purrception/primitives';
import type { EntityMetaMatcher } from '@purrception/source-fs';

export const entityMatcher: EntityMetaMatcher<ProviderEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/providers\//);
	if (!match) {
		return;
	}

	const name = path.basename(ctx.dirMeta.path);
	// eslint-disable-next-line dot-notation
	const packageName = ctx.fsContext.meta['package'] as string;
	const partial = createEntityPartial('provider', name, packageName);

	const moduleName = match[1];
	return createProviderEntityPartial(partial, moduleName, ctx.dirMeta.path);
};

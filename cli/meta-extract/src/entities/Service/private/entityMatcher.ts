import path from 'path';

import { type ServiceEntityPartial, createServiceEntityPartial } from '@no-comply/meta';
import { createEntityPartial } from '@purrception/primitives';
import type { EntityMetaMatcher } from '@purrception/source-fs';

export const entityMatcher: EntityMetaMatcher<ServiceEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/services\//);
	if (!match) {
		return;
	}

	const name = path.basename(ctx.dirMeta.path);
	// eslint-disable-next-line dot-notation
	const packageName = ctx.fsContext.meta['package'] as string;
	const partial = createEntityPartial('service', name, packageName);

	const moduleName = match[1];
	return createServiceEntityPartial(partial, moduleName, ctx.dirMeta.path);
};

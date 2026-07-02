import path from 'path';

import { type ComponentEntityPartial, createComponentEntityPartial } from '@no-comply/meta';
import { createEntityPartial } from '@purrception/primitives';
import type { EntityMetaMatcher } from '@purrception/source-fs';

export const entityMatcher: EntityMetaMatcher<ComponentEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/components\//);
	if (!match) {
		return;
	}

	const name = path.basename(ctx.dirMeta.path);
	// eslint-disable-next-line dot-notation
	const packageName = ctx.fsContext.meta['package'] as string;
	const partial = createEntityPartial('component', name, packageName);

	const moduleName = match[1];
	return createComponentEntityPartial(partial, moduleName, ctx.dirMeta.path);
};

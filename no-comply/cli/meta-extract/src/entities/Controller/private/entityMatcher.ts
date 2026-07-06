import path from 'path';

import { type ControllerEntityPartial, createControllerEntityPartial } from '@no-comply/meta';
import { createEntityPartial } from '@purrception/primitives';
import type { EntityMetaMatcher } from '@purrception/source-fs';

export const entityMatcher: EntityMetaMatcher<ControllerEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)\/controllers\//);
	if (!match) {
		return;
	}

	const name = path.basename(ctx.dirMeta.path);
	// eslint-disable-next-line dot-notation
	const packageName = ctx.fsContext.meta['package'] as string;
	const partial = createEntityPartial('controller', name, packageName);

	const moduleName = match[1];
	return createControllerEntityPartial(partial, moduleName, ctx.dirMeta.path);
};

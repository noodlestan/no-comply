import { type ModuleEntityPartial, createModuleEntityPartial } from '@no-comply/meta';
import { createEntityPartial } from '@purrception/primitives';
import type { EntityMetaMatcher } from '@purrception/source-fs';

export const entityMatcher: EntityMetaMatcher<ModuleEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)$/);
	if (!match) {
		return;
	}

	const name = match[1];
	// eslint-disable-next-line dot-notation
	const packageName = ctx.fsContext.meta['package'] as string;
	const partial = createEntityPartial('module', name, packageName);

	return createModuleEntityPartial(partial, ctx.dirMeta.path);
};

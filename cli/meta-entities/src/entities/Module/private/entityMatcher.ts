import type { ModuleEntityPartial } from '@no-comply/meta';
import type { EntityMetaMatcher } from '@purrception/source-fs';

export const entityMatcher: EntityMetaMatcher<ModuleEntityPartial> = async ctx => {
	const match = ctx.dirMeta.relative.match(/^([^/]+)$/);
	if (!match) {
		return;
	}

	const name = match[1];

	return {
		type: 'module',
		name,
		// eslint-disable-next-line dot-notation
		package: ctx.fsContext.meta['package'] as string,
		module: '',
		path: ctx.dirMeta.path,
	};
};

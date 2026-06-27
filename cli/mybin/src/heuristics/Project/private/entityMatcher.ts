import type { EntityMetaMatcher } from '@purrception/source-fs';

import type { ProjectEntityPartial } from '../../../entities';

export const entityMatcher: EntityMetaMatcher<ProjectEntityPartial> = async ctx => {
	if (ctx.dirMeta.path === '.') {
		return;
	}

	if (!ctx.hasFile('package.json')) {
		return;
	}

	const pkgContents = await ctx.readFile('package.json');
	const pkg = JSON.parse(pkgContents);

	if (!pkg.name) {
		throw new Error(`No name in package.json: ${ctx.dirMeta.path}.`);
	}

	return {
		type: 'project',
		name: pkg.name,
		// eslint-disable-next-line dot-notation
		package: ctx.fsContext.meta['package'] as string,
		path: ctx.dirMeta.path,
	};
};

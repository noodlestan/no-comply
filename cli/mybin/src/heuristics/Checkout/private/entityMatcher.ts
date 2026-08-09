import type { EntityMetaMatcher } from '@purrception/source-fs';

import type { CheckoutEntityPartial } from '../../../entities';

export const entityMatcher: EntityMetaMatcher<CheckoutEntityPartial> = async ctx => {
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
		type: 'checkout',
		name: ctx.dirMeta.relative,
		// eslint-disable-next-line dot-notation
		package: ctx.fsContext.meta['package'] as string,
		path: ctx.dirMeta.path,
		projectName: pkg.name,
	};
};

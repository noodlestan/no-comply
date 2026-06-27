import path from 'node:path';

import type { EntityFileResolver } from '@purrception/source-fs';

import type { CheckoutEntityFiles, CheckoutEntityPartial } from '../../../entities';

export const fileResolver: EntityFileResolver<
	CheckoutEntityPartial,
	CheckoutEntityFiles
> = async ctx => {
	const pkg = path.join(ctx.dirMeta.path, 'package.json');
	const gitconfig = path.join(ctx.dirMeta.path, '.git/config');

	return {
		package: pkg,
		gitconfig,
	};
};

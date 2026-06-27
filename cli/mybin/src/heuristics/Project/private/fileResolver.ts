import path from 'node:path';

import type { EntityFileResolver } from '@purrception/source-fs';

import type { ProjectEntityFiles, ProjectEntityPartial } from '../../../entities';

export const fileResolver: EntityFileResolver<
	ProjectEntityPartial,
	ProjectEntityFiles
> = async ctx => {
	const pkg = path.join(ctx.dirMeta.path, 'package.json');

	return {
		package: pkg,
	};
};

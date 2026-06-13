import type { ComponentEntityFiles, ComponentEntityPartial } from '@no-comply/meta';
import type { EntityFileResolver } from '@purrception/source-fs';

import { findComponentFile, findFactoryFile, findIndexFile, findTypesFile } from '../../../utils';

export const fileResolver: EntityFileResolver<
	ComponentEntityPartial,
	ComponentEntityFiles
> = async ctx => {
	const index = findIndexFile(ctx);
	const implementation = findComponentFile(ctx);
	const factory = findFactoryFile(ctx);
	const types = findTypesFile(ctx);
	if (!index || !implementation || !factory || !types) {
		return;
	}

	return {
		index,
		implementation,
		factory,
		types,
	};
};

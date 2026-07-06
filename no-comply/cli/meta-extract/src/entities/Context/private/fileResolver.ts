import type { ContextEntityFiles, ContextEntityPartial } from '@no-comply/meta';
import type { EntityFileResolver } from '@purrception/source-fs';

import { findFactoryFile, findIndexFile, findTypesFile } from '../../../utils';

export const fileResolver: EntityFileResolver<
	ContextEntityPartial,
	ContextEntityFiles
> = async ctx => {
	const index = findIndexFile(ctx);
	const implementation = findFactoryFile(ctx);
	if (!index || !implementation) {
		return;
	}

	const types = findTypesFile(ctx);
	return {
		index,
		implementation,
		types,
	};
};

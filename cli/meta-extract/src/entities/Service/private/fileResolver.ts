import type { ServiceEntityFiles, ServiceEntityPartial } from '@no-comply/meta';
import type { EntityFileResolver } from '@purrception/source-fs';

import { findFactoryFile, findIndexFile, findTypesFile } from '../../../utils';

export const fileResolver: EntityFileResolver<
	ServiceEntityPartial,
	ServiceEntityFiles
> = async ctx => {
	const index = findIndexFile(ctx);
	const implementation = findFactoryFile(ctx);
	const types = findTypesFile(ctx);
	if (!index || !implementation || !types) {
		return;
	}

	return {
		index,
		implementation,
		types,
	};
};

import type { EntityFileResolver } from '@purrception/source-fs';

import { findFactoryFile, findTypesFile } from '../../../utils';
import type { ContextEntityFiles } from '../types';

export const fileResolver: EntityFileResolver<ContextEntityFiles> = async ctx => {
	const implementation = findFactoryFile(ctx);
	if (!implementation) {
		return;
	}

	const types = findTypesFile(ctx);
	return {
		implementation,
		types,
	};
};

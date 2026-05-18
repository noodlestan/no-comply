import type { EntityFileResolver } from '@purrception/source-fs';

import { findFactoryFile, findTypesFile } from '../../../utils';
import type { ServiceEntityFiles } from '../types';

export const fileResolver: EntityFileResolver<ServiceEntityFiles> = async ctx => {
	const implementation = findFactoryFile(ctx);
	const types = findTypesFile(ctx);
	if (!implementation || !types) {
		return;
	}

	return {
		implementation,
		types,
	};
};

import type { EntityFileResolver } from '@purrception/source-fs';

import { findComponentFile, findFactoryFile, findTypesFile } from '../../../utils';
import type { ComponentEntityFiles } from '../types';

export const fileResolver: EntityFileResolver<ComponentEntityFiles> = async ctx => {
	const implementation = findComponentFile(ctx);
	const factory = findFactoryFile(ctx);
	const types = findTypesFile(ctx);
	if (!implementation || !factory || !types) {
		return;
	}

	return {
		implementation,
		factory,
		types,
	};
};

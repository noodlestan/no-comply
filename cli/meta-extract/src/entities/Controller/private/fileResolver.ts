import type { ControllerEntityFiles, ControllerEntityPartial } from '@no-comply/meta';
import type { EntityFileResolver } from '@purrception/source-fs';

import { findFactoryFile, findIndexFile, findTypesFile } from '../../../utils';

export const fileResolver: EntityFileResolver<
	ControllerEntityPartial,
	ControllerEntityFiles
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

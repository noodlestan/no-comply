import type { ControllerEntityFiles } from '@no-comply/meta';
import type { EntityFileResolver } from '@purrception/source-fs';

import { findFactoryFile, findTypesFile } from '../../../utils';

export const fileResolver: EntityFileResolver<ControllerEntityFiles> = async ctx => {
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

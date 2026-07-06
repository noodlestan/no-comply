import type { ModuleEntityFiles, ModuleEntityPartial } from '@no-comply/meta';
import type { EntityFileResolver } from '@purrception/source-fs';

import { findHelperFiles, findIndexFile, findTypesFile } from '../../../utils';

export const fileResolver: EntityFileResolver<
	ModuleEntityPartial,
	ModuleEntityFiles
> = async ctx => {
	const index = findIndexFile(ctx);
	const types = findTypesFile(ctx);
	const helpers = await findHelperFiles(ctx);

	if (!index) {
		return;
	}

	return {
		index,
		types,
		helpers: helpers || [],
	};
};

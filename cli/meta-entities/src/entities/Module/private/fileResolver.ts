import type { ModuleEntityFiles } from '@no-comply/meta';
import type { EntityFileResolver } from '@purrception/source-fs';

import { findHelperFiles, findTypesFile } from '../../../utils';

export const fileResolver: EntityFileResolver<ModuleEntityFiles> = async ctx => {
	const types = findTypesFile(ctx);
	const helpers = await findHelperFiles(ctx);

	return {
		types,
		helpers: helpers || [],
	};
};

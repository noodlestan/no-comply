import type { EntityFileResolver } from '@purrception/source-fs';

import { findHelperFiles, findTypesFile } from '../../../utils';
import type { ModuleEntityFiles } from '../types';

export const fileResolver: EntityFileResolver<ModuleEntityFiles> = async ctx => {
	const types = findTypesFile(ctx);
	const helpers = await findHelperFiles(ctx);

	return {
		types,
		helpers: helpers || [],
	};
};

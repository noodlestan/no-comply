import type { ProviderEntityFiles } from '@no-comply/meta';
import type { EntityFileResolver } from '@purrception/source-fs';

import { findFactoryFile, findHookFiles, findTypesFile } from '../../../utils';

export const fileResolver: EntityFileResolver<ProviderEntityFiles> = async ctx => {
	const implementation = findFactoryFile(ctx);
	const types = findTypesFile(ctx);
	const hooks = findHookFiles(ctx);

	if (!implementation || !types) {
		return;
	}

	return {
		implementation,
		hooks,
	};
};

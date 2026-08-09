import type { ProviderEntityFiles, ProviderEntityPartial } from '@no-comply/meta';
import type { EntityFileResolver } from '@purrception/source-fs';

import { findFactoryFile, findHookFiles, findIndexFile, findTypesFile } from '../../../utils';

export const fileResolver: EntityFileResolver<
	ProviderEntityPartial,
	ProviderEntityFiles
> = async ctx => {
	const index = findIndexFile(ctx);
	const implementation = findFactoryFile(ctx);
	const types = findTypesFile(ctx);
	const hooks = findHookFiles(ctx);

	if (!index || !implementation || !types) {
		return;
	}

	return {
		index,
		implementation,
		hooks,
	};
};

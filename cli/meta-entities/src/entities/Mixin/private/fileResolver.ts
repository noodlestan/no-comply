import type { EntityFileResolver } from '@purrception/source-fs';

import { findFactoryFile, findTypesFile } from '../../../utils';
import type { MixinEntityFiles } from '../types';

export const fileResolver: EntityFileResolver<MixinEntityFiles> = async ctx => {
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

import type { MixinEntityData, MixinEntityFiles, MixinEntityPartial } from '@no-comply/meta';
import { type DirectoryExtractorFactory, defineDirectoryExtractor } from '@purrception/source-fs';

import { entityExtractor, entityMatcher, fileResolver } from './private';

export const createMixinEntityExtractor: DirectoryExtractorFactory<
	MixinEntityPartial,
	MixinEntityFiles,
	MixinEntityData
> = (options = {}) => {
	return defineDirectoryExtractor({
		match: options.matcher ?? entityMatcher,
		resolve: options?.resolver ?? fileResolver,
		extract: entityExtractor,
		skipSubDirs: true,
	});
};

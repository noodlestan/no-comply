import type { ModuleEntityData, ModuleEntityFiles, ModuleEntityPartial } from '@no-comply/meta';
import { type DirectoryExtractorFactory, defineDirectoryExtractor } from '@purrception/source-fs';

import { entityExtractor, entityMatcher, fileResolver } from './private';

export const createModuleEntityExtractor: DirectoryExtractorFactory<
	ModuleEntityPartial,
	ModuleEntityFiles,
	ModuleEntityData
> = (options = {}) => {
	return defineDirectoryExtractor({
		match: options.matcher ?? entityMatcher,
		resolve: options.resolver ?? fileResolver,
		extract: entityExtractor,
		skipSubDirs: false,
	});
};

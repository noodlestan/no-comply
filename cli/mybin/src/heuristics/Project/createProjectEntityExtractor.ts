import { type DirectoryExtractorFactory, defineDirectoryExtractor } from '@purrception/source-fs';

import type { ProjectEntityData, ProjectEntityFiles, ProjectEntityPartial } from '../../entities';

import { entityExtractor, entityMatcher, fileResolver } from './private';

export const createProjectEntityExtractor: DirectoryExtractorFactory<
	ProjectEntityPartial,
	ProjectEntityFiles,
	ProjectEntityData
> = (options = {}) => {
	return defineDirectoryExtractor({
		match: options.matcher ?? entityMatcher,
		resolve: options?.resolver ?? fileResolver,
		extract: entityExtractor,
		skipSubDirs: true,
	});
};

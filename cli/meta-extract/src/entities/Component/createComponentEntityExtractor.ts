import type {
	ComponentEntityData,
	ComponentEntityFiles,
	ComponentEntityPartial,
} from '@no-comply/meta';
import { type DirectoryExtractorFactory, defineDirectoryExtractor } from '@purrception/source-fs';

import { entityExtractor, entityMatcher, fileResolver } from './private';

export const createComponentEntityExtractor: DirectoryExtractorFactory<
	ComponentEntityPartial,
	ComponentEntityFiles,
	ComponentEntityData
> = (options = {}) => {
	return defineDirectoryExtractor({
		match: options.matcher ?? entityMatcher,
		resolve: options?.resolver ?? fileResolver,
		extract: entityExtractor,
		skipSubDirs: true,
	});
};

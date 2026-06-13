import type {
	ControllerEntityData,
	ControllerEntityFiles,
	ControllerEntityPartial,
} from '@no-comply/meta';
import { type DirectoryExtractorFactory, defineDirectoryExtractor } from '@purrception/source-fs';

import { entityExtractor, entityMatcher, fileResolver } from './private';

export const createControllerEntityExtractor: DirectoryExtractorFactory<
	ControllerEntityPartial,
	ControllerEntityFiles,
	ControllerEntityData
> = (options = {}) => {
	return defineDirectoryExtractor({
		match: options.matcher ?? entityMatcher,
		resolve: options?.resolver ?? fileResolver,
		extract: entityExtractor,
		skipSubDirs: true,
	});
};

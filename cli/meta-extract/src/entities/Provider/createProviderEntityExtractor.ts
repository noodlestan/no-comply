import type {
	ProviderEntityData,
	ProviderEntityFiles,
	ProviderEntityPartial,
} from '@no-comply/meta';
import { type DirectoryExtractorFactory, defineDirectoryExtractor } from '@purrception/source-fs';

import { entityExtractor, entityMatcher, fileResolver } from './private';

export const createProviderEntityExtractor: DirectoryExtractorFactory<
	ProviderEntityPartial,
	ProviderEntityFiles,
	ProviderEntityData
> = (options = {}) => {
	return defineDirectoryExtractor({
		match: options.matcher ?? entityMatcher,
		resolve: options?.resolver ?? fileResolver,
		extract: entityExtractor,
		skipSubDirs: true,
	});
};

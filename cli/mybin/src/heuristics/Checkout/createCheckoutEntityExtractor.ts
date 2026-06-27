import { type DirectoryExtractorFactory, defineDirectoryExtractor } from '@purrception/source-fs';

import type {
	CheckoutEntityData,
	CheckoutEntityFiles,
	CheckoutEntityPartial,
} from '../../entities';

import { entityExtractor, entityMatcher, fileResolver } from './private';

export const createCheckoutEntityExtractor: DirectoryExtractorFactory<
	CheckoutEntityPartial,
	CheckoutEntityFiles,
	CheckoutEntityData
> = (options = {}) => {
	return defineDirectoryExtractor({
		match: options.matcher ?? entityMatcher,
		resolve: options?.resolver ?? fileResolver,
		extract: entityExtractor,
		skipSubDirs: true,
	});
};

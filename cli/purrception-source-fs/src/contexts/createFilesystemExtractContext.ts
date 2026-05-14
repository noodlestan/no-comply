import type { DirectoryEntityExtractor } from '../types';

import type { FilesystemExtractContext } from './types';

interface CreateFilesystemExtractContextOptions {
	rootDir: string;
	extractors: DirectoryEntityExtractor[];
	defaults?: Record<string, unknown>;
	log?: (msg: string) => void;
	meta?: Record<string, unknown>;
}

export function createFilesystemExtractContext(
	options: CreateFilesystemExtractContextOptions,
): FilesystemExtractContext {
	return {
		rootDir: options.rootDir,
		extractors: options.extractors,
		defaults: options.defaults ?? {},
		meta: options.meta || {},
		log: options.log ?? (() => {}),
	};
}

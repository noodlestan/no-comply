import type { DirectoryEntityExtractor } from '../types';

import type { FilesystemExtractContext } from './types';

export function createFilesystemExtractContext(input: {
	rootDir: string;
	extractors: DirectoryEntityExtractor[];
	defaults?: Record<string, unknown>;
	log?: (msg: string) => void;
}): FilesystemExtractContext {
	return {
		rootDir: input.rootDir,
		extractors: input.extractors,
		defaults: input.defaults ?? {},
		log: input.log ?? (() => {}),
	};
}

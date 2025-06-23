import type { EntityExtractResult } from '@purrception/primitives';

import { createFilesystemExtractContext } from '../contexts';
import { processRootDir } from '../processors';
import type { DirectoryEntityExtractor } from '../types';

interface ExtractEntitiesFromFileSystemOptions {
	rootDir: string;
	extractors: DirectoryEntityExtractor[];
}

export async function extractEntitiesFromFileSystem(
	opts: ExtractEntitiesFromFileSystemOptions,
): Promise<EntityExtractResult[]> {
	const { rootDir, extractors } = opts;

	const ctx = createFilesystemExtractContext({
		rootDir,
		extractors,
		log: msg => console.info(msg),
	});

	const processors = await processRootDir(ctx);
	const results = await Promise.all(processors.flatMap(fn => fn()));
	const entities = results.flat();

	return entities;
}

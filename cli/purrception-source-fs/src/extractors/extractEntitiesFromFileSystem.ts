import type { EntityExtractResult } from '@purrception/primitives';

import { createFilesystemExtractContext } from '../contexts';
import { processRootDir } from '../processors';
import type { DirectoryExtractAPI } from '../types';

type ExtractEntitiesFromFileSystemOptions = {
	rootDir: string;
	extractors: DirectoryExtractAPI[];
	meta?: Record<string, unknown>;
};

export async function extractEntitiesFromFileSystem(
	opts: ExtractEntitiesFromFileSystemOptions,
): Promise<EntityExtractResult[]> {
	const { rootDir, extractors } = opts;

	const ctx = createFilesystemExtractContext({
		rootDir,
		extractors,
		log: msg => console.info(msg),
		meta: opts.meta,
	});

	const processors = await processRootDir(ctx);
	const results = await Promise.all(processors.flatMap(fn => fn()));
	const entities = results.flat().map(entity => ({ ...entity, ...opts.meta }));

	return entities;
}

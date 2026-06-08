import type { Dirent } from 'fs';
import fs from 'fs/promises';
import path from 'path';

import {
	type FilesystemExtractContext,
	createDirectoryExtractContext,
	createDirectoryExtractMeta,
} from '../../contexts';
import type { DirectoryEntityProcessor } from '../../types';

async function listDirEntries(dir: string): Promise<Dirent[]> {
	return await fs.readdir(dir, { withFileTypes: true });
}

export async function processDirectory(
	ctx: FilesystemExtractContext,
	dir: string,
): Promise<DirectoryEntityProcessor[]> {
	const processors: DirectoryEntityProcessor[] = [];

	const entries = await listDirEntries(dir);
	const meta = await createDirectoryExtractMeta(dir, ctx.rootDir);
	const moduleContext = createDirectoryExtractContext(ctx, meta);

	let skipChildren = false;

	for (const extractor of ctx.extractors) {
		const result = await extractor(moduleContext);
		if (result) {
			const [processor, skip] = result;
			processors.push(processor);
			skipChildren = skipChildren || skip;
		}
	}

	if (!skipChildren) {
		const subdirs = entries.filter(e => e.isDirectory()).map(e => path.join(dir, e.name));

		for (const sub of subdirs) {
			processors.push(...(await processDirectory(ctx, sub)));
		}
	}

	return processors;
}

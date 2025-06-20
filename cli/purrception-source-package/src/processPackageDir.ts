import type { Dirent } from 'fs';
import fs from 'fs/promises';
import path from 'path';

import { createModuleExtractContext } from './createModuleExtractContext';
import type { ModuleEntityProcessor, ModuleExtractMeta, PackageExtractContext } from './types';

async function listDirEntries(dir: string): Promise<Dirent[]> {
	return await fs.readdir(dir, { withFileTypes: true });
}
export async function processPackageDir(
	ctx: PackageExtractContext,
	dir: string,
): Promise<ModuleEntityProcessor[]> {
	const processors: ModuleEntityProcessor[] = [];

	const entries = await listDirEntries(dir);
	const moduleMeta: ModuleExtractMeta = {
		path: dir,
		relative: path.relative(ctx.rootDir, dir),
		files: entries.map(e => e.name),
	};

	const moduleContext = createModuleExtractContext(ctx, moduleMeta);

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
			processors.push(...(await processPackageDir(ctx, sub)));
		}
	}

	return processors;
}

import fs from 'fs/promises';
import path from 'path';

import type { ModuleExtractContext, ModuleExtractMeta, PackageExtractContext } from './types';

export function createModuleExtractContext(
	packageContext: PackageExtractContext,
	moduleMeta: ModuleExtractMeta,
): ModuleExtractContext {
	const fileCache = new Map<string, string>();
	const watched = new Set<[string, boolean]>();

	const hasFile = (filename: string) => {
		const exists = moduleMeta.files.includes(filename);
		watched.add([filename, exists]);
		return exists;
	};

	const readFile = async (filename: string) => {
		if (!hasFile(filename)) {
			throw new Error(`Filename ${filename} not in module`);
		}

		if (!fileCache.has(filename)) {
			const fullPath = path.join(moduleMeta.path, filename);
			const contents = await fs.readFile(fullPath, 'utf8'); // your FSAdapter later
			fileCache.set(filename, contents);
		}

		return fileCache.get(filename) as string;
	};

	return {
		packageContext,
		moduleMeta,
		hasFile,
		readFile,
	};
}

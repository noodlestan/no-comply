import type { ModuleEntityExtractor, PackageExtractContext } from './types';

export function createPackageExtractContext(input: {
	rootDir: string;
	extractors: ModuleEntityExtractor[];
	defaults?: Record<string, unknown>;
	log?: (msg: string) => void;
}): PackageExtractContext {
	return {
		rootDir: input.rootDir,
		extractors: input.extractors,
		defaults: input.defaults ?? {},
		log: input.log ?? (() => {}),
	};
}

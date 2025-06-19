import type { ModuleExtractHeuristic, PackageExtractContext } from './types';

export function createPackageExtractContext(input: {
	rootDir: string;
	heuristics: ModuleExtractHeuristic[];
	defaults?: Record<string, unknown>;
	log?: (msg: string) => void;
}): PackageExtractContext {
	return {
		rootDir: input.rootDir,
		heuristics: input.heuristics,
		defaults: input.defaults ?? {},
		log: input.log ?? (() => {}),
	};
}

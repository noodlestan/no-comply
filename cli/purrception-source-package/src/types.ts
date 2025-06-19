import type { EntityExtractMeta, EntityExtractResult } from '@purrception/primitives';

export type PackageExtractContext = {
	rootDir: string;
	heuristics: ModuleExtractHeuristic[];
	defaults?: Record<string, unknown>;
	log?: (msg: string) => void;
};

export type ModuleExtractMeta = {
	path: string;
	relative: string;
	files: string[];
};

export type ModuleExtractContext = {
	packageContext: PackageExtractContext;
	moduleMeta: ModuleExtractMeta;
	hasFile: (filename: string) => boolean;
	readFile: (filename: string) => Promise<string>;
};

export type ModuleExtractHeuristic = (
	input: ModuleExtractContext,
) => Promise<[ModuleProcessor, EntityExtractMeta, boolean] | undefined>;

export type ExtractedEntity = {
	type: string;
	name: string;
	[key: string]: unknown;
};

export type ModuleProcessor = () => Promise<EntityExtractResult[]>;

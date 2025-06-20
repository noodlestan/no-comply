import type { EntityExtractResult } from '@purrception/primitives';

export type PackageExtractContext = {
	rootDir: string;
	extractors: ModuleEntityExtractor[];
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

export type ModuleEntityExtractor = (
	input: ModuleExtractContext,
) => Promise<[ModuleEntityProcessor, boolean] | undefined>;

export type ExtractedEntity = {
	type: string;
	name: string;
	[key: string]: unknown;
};

export type ModuleEntityProcessor = () => Promise<EntityExtractResult[]>;

import type { DirectoryExtractAPI } from '../types';

export type FilesystemExtractContext = {
	rootDir: string;
	extractors: DirectoryExtractAPI[];
	defaults?: Record<string, unknown>;
	meta: Record<string, unknown>;
	log?: (msg: string) => void;
};

export type DirectoryExtractMeta = {
	path: string;
	relative: string;
	files: string[];
	dirs: string[];
};

export type DirectoryExtractContext = {
	fsContext: FilesystemExtractContext;
	dirMeta: DirectoryExtractMeta;
	hasFile: (filename: string) => boolean;
	readFile: (filename: string) => Promise<string>;
	hasDir: (dirname: string) => boolean;
	readDir: (filename: string) => Promise<DirectoryExtractMeta>;
};

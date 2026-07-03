import type { CodeNodeLinker, CodeRendererLanguage } from '../types';

export type CodeSnippetOptions = {
	columns?: number;
};

export type CodeRendererContextOptions = {
	langs?: CodeRendererLanguage[];
	linker?: CodeNodeLinker;
};

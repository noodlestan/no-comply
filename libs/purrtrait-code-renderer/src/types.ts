import type { CodeLayoutNode } from './structure';

export type CodeNodeLinker = (linkerContext: object, value: string) => string | undefined;

export type CodeRendererContext = {
	langs: CodeRendererLanguage[];
	linker: CodeNodeLinker;
};

export type CodeSnippetContext = {
	linkerContext: object;
	columns: number;
	linker: CodeNodeLinker;
};

export type CodeRendererLanguage = {
	lang: string;
	name: string;
	layout: (snippetContext: CodeSnippetContext, node: object | string) => CodeLayoutNode[];
};

import type { CodeDataNode, CodeLayoutLanguage } from '../../types';

export type CodeNodeLinker = (node: CodeDataNode) => string | undefined;

export type CodeLayoutContextOptions = {
	langs?: CodeLayoutLanguage[];
	linker?: CodeNodeLinker;
	columns?: number;
};

export type CodeLayoutContextValue = {
	langs: CodeLayoutLanguage[];
	linker: CodeNodeLinker;
	columns: number;
};

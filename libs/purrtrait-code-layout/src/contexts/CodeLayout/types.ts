import type { CodeLayoutLanguage } from '../../types';

export type CodeNodeLinker = (ctx: CodeLayoutContextValue, value: string) => string | undefined;

export type CodeLayoutContextOptions = {
	langs?: CodeLayoutLanguage[];
	linker?: CodeNodeLinker;
	columns?: number;
};

export type CodeLayoutContextValue = {
	langs: CodeLayoutLanguage[];
	linker: CodeNodeLinker;
	columns: number;
	context?: object;
};

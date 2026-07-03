import type { CodeLayoutContextOptions, CodeLayoutContextValue } from './types';

export const createCodeLayoutContext = (
	options: CodeLayoutContextOptions = {},
): CodeLayoutContextValue => {
	return {
		langs: options.langs || [],
		columns: options.columns || 60,
		linker: options.linker || (() => undefined),
	};
};

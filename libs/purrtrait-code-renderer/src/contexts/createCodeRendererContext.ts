import type { CodeRendererContext } from '../types';

import type { CodeRendererContextOptions } from './types';

export const createCodeRendererContext = (
	options: CodeRendererContextOptions = {},
): CodeRendererContext => {
	return {
		langs: options.langs || [],
		linker: options.linker || (() => undefined),
	};
};

import { SolidCodeLinkDefault } from '../../private';

import type { SolidCodeLayoutContextOptions, SolidCodeLayoutContextValue } from './types';

export const createSolidCodeLayoutContext = (
	options: SolidCodeLayoutContextOptions = {},
): SolidCodeLayoutContextValue => {
	return {
		langs: options.langs || [],
		columns: options.columns || 60,
		linker: options.linker || (() => undefined),
		link: options.link || SolidCodeLinkDefault,
	};
};

import * as babel from '@purrpose/client-babel';
import * as solidPreset from '@purrpose/client-babel-preset-solidjs';

import { createTSXCompiler } from './private';
import type { TSXCompilerModule } from './types';

export const createTSXCompilerModule = (): TSXCompilerModule => {
	const createCompiler = () => {
		return createTSXCompiler(babel, solidPreset);
	};

	const api: TSXCompilerModule = {
		createCompiler,
	};

	return api;
};

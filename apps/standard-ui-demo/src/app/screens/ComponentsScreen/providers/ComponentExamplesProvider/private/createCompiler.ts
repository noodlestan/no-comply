import { type CompilerAPI, createCompiler } from '@purrpose/client-babel';
import solidPreset from '@purrpose/client-babel-preset-solidjs';

export function createTSXCompiler(): CompilerAPI {
	const compiler = createCompiler({
		// debug: 'STANDARD_UI_DEMO',
		presets: [solidPreset()],
	});
	return compiler;
}

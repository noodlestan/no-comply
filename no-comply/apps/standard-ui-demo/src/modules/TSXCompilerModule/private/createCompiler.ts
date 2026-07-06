import type { CompilerAPI } from '../types';

export function createTSXCompiler(
	babel: typeof import('@purrpose/client-babel'),
	solidPreset: typeof import('@purrpose/client-babel-preset-solidjs'),
): CompilerAPI {
	const compiler = babel.createCompiler({
		// debug: 'STANDARD_UI_DEMO',
		presets: [solidPreset.solidPreset()],
	});
	return compiler;
}

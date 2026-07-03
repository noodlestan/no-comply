import { renderLines } from '../../private';
import type { CodeRendererContext, CodeSnippetContext } from '../../types';

import { NEW_LINE, serializeLine } from './private';
import type { CodeSerializerAPI, CodeSerializerOptions, CodeSerializerOutput } from './types';

export const createCodeSerializer = (
	rendererContext: CodeRendererContext,
	options?: CodeSerializerOptions,
): CodeSerializerAPI => {
	const serialize = (
		lang: string,
		node: object | object[],
		linkerContext: object = {},
	): CodeSerializerOutput => {
		const snippetContext: CodeSnippetContext = {
			linker: options?.linker ?? rendererContext.linker,
			linkerContext,
			columns: options?.columns ?? 120,
		};

		const symbols = new Map<string, string>();

		const lines = renderLines(rendererContext, snippetContext, lang, node);
		const code = lines.map(line => serializeLine(line, symbols)).join(NEW_LINE);

		return { code, symbols };
	};

	return { serialize };
};

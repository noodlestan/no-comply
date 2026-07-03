import { computeLayout, formatLayout } from '../../private';
import type { CodeRendererContext, CodeSnippetContext } from '../../types';

import type { CodeLayoutAPI, CodeLayoutOptions } from './types';

export const createCodeLayout = (
	rendererContext: CodeRendererContext,
	options?: CodeLayoutOptions,
): CodeLayoutAPI => {
	const render = (lang: string, node: object | object[], linkerContext: object = {}) => {
		const snippetContext: CodeSnippetContext = {
			linker: options?.linker ?? rendererContext.linker,
			linkerContext,
			columns: options?.columns ?? 120,
		};

		const nodes = Array.isArray(node) ? node : [node];

		return nodes.flatMap((n, index) => {
			const layoutGroup = computeLayout(rendererContext, snippetContext, lang, n);
			const formattedLines = formatLayout(layoutGroup, snippetContext.columns);

			return index === 0 ? formattedLines : [{ indent: 0, content: [] }, ...formattedLines];
		});
	};

	return { render };
};

import type { CodeLayoutNode } from '../structure';
import type { CodeRendererContext, CodeSnippetContext } from '../types';

export function computeLayout(
	rendererContext: CodeRendererContext,
	snippetContext: CodeSnippetContext,
	lang: string,
	node: object,
): CodeLayoutNode[] {
	const langHandler = rendererContext.langs.find(l => l.lang === lang);
	if (!langHandler) {
		throw new Error(`No layout registered for language: ${lang}`);
	}
	return langHandler.layout(snippetContext, node);
}

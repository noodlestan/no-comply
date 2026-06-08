import type { CodeLayoutContextValue } from '../../contexts';
import type { CodeLayoutNode } from '../../types';

export function computeLayout(
	ctx: CodeLayoutContextValue,
	lang: string,
	node: object,
): CodeLayoutNode[] {
	const langHandler = ctx.langs.find(l => l.lang === lang);
	if (!langHandler) {
		throw new Error(`No layout registered for language: ${lang}`);
	}
	return langHandler.layout(ctx, node);
}

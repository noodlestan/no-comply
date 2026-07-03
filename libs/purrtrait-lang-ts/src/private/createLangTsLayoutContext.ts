import type { CodeSnippetContext } from '@purrtrait/code-renderer';

import type { LangTsLayoutContext } from './types';

export const createLangTsLayoutContext = (
	snippetContext: CodeSnippetContext,
): LangTsLayoutContext => {
	return {
		snippetContext,
	};
};

import type { CodeSnippetContext } from '@purrtrait/code-renderer';

export type LangTsLayoutContext = {
	snippetContext: CodeSnippetContext;
	genericParams?: Set<string>;
};

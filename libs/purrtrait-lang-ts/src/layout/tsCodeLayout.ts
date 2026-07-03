import type {
	CodeLayoutNode,
	CodeRendererLanguage,
	CodeSnippetContext,
} from '@purrtrait/code-renderer';

import { LanguageName, PurrceptionLanguageId } from '../constants';
import { createLangTsLayoutContext } from '../private';

import { layoutCode } from './private';

export const tsCodeLayout: CodeRendererLanguage = {
	lang: PurrceptionLanguageId,
	name: LanguageName,
	layout: (snippetContext: CodeSnippetContext, node: object | string): CodeLayoutNode[] => {
		const context = createLangTsLayoutContext(snippetContext);
		return layoutCode(context, node);
	},
};

import { createChainedResource, createCombinedResource } from '@no-comply/solid-primitives';
import { createHighlighter } from 'shiki';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import type { Accessor, Resource } from 'solid-js';

import { createOptions, formatCode, getLoadedShikiLangs } from './private';
import type {
	SyntaxHighlighterAPI,
	SyntaxHighlighterLang,
	SyntaxHighlighterOptionsPartial,
	SyntaxHighlighterSymbolMap,
} from './types';

export const createSyntaxHighlighter = (
	partialOptions: SyntaxHighlighterOptionsPartial = {},
): SyntaxHighlighterAPI => {
	const { theme, langs } = createOptions(partialOptions);

	const loadedShikiLangs = getLoadedShikiLangs(langs);
	const jsEngine = createJavaScriptRegexEngine();
	const highlighterPromise = createHighlighter({
		themes: [theme],
		engine: jsEngine,
		langs: loadedShikiLangs,
	});

	const createSyntaxHighlighterResource = (
		lang: Accessor<string>,
		code: Accessor<string | undefined>,
		symbols?: Accessor<SyntaxHighlighterSymbolMap | undefined>,
	): Resource<string | undefined> => {
		const [resource] = createChainedResource(
			createCombinedResource([lang, code, symbols || (() => undefined)]),
			async ([currentLang, currentCode, currentSymbols]) => {
				if (!currentCode) {
					return;
				}

				if (!(currentLang in langs)) {
					console.warn(`Language ${currentLang} is not supported`);
					return;
				}

				const lang = currentLang as SyntaxHighlighterLang;
				const langOptions = langs[lang];
				const formattedCode = await formatCode(currentCode, langOptions);

				const highlighter = await highlighterPromise;
				const shikiLang = langOptions.shiki.lang;
				const transformers =
					langOptions.shiki?.transformers?.({
						lang,
						code: formattedCode,
						symbols: currentSymbols,
					}) ?? undefined;

				return await highlighter.codeToHtml(formattedCode, {
					lang: shikiLang,
					theme,
					transformers,
				});
			},
		);

		return resource;
	};

	return {
		createSyntaxHighlighterResource,
	};
};

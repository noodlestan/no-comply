import type {
	SyntaxHighlighterLang,
	SyntaxHighlighterLangOptions,
	SyntaxHighlighterOptions,
	SyntaxHighlighterOptionsPartial,
} from '../types';

import { DEFAULT_OPTIONS } from './constants';
import { mergeLangOptions } from './mergeLangOptions';

export const createOptions = (
	partialOptions: SyntaxHighlighterOptionsPartial = {},
): SyntaxHighlighterOptions => {
	const theme = partialOptions.theme ?? 'github-dark-dimmed';

	const langKeys = Object.keys(DEFAULT_OPTIONS) as SyntaxHighlighterLang[];

	const langEntries = langKeys.map(lang => {
		const partialLangOptions = partialOptions.langs?.[lang];
		const mergedLangOptions = mergeLangOptions(DEFAULT_OPTIONS[lang], partialLangOptions);

		return [lang, mergedLangOptions] as const;
	});

	const langs = Object.fromEntries(langEntries) as Record<
		SyntaxHighlighterLang,
		SyntaxHighlighterLangOptions
	>;

	return {
		theme,
		langs,
	};
};

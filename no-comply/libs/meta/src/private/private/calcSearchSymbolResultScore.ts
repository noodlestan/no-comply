import {
	SEARCH_MATCH_SCORE_SYMBOL_DESCRIPTION_GREEDY,
	SEARCH_MATCH_SCORE_SYMBOL_DESCRIPTION_VERBATIM,
	SEARCH_MATCH_SCORE_SYMBOL_NAME_GREEDY,
	SEARCH_MATCH_SCORE_SYMBOL_NAME_VERBATIM,
} from '../constants';

export function calcSearchSymbolResultScore(
	verbatimName: boolean,
	verbatimDescription: boolean,
	greedyName: boolean,
	greedyDescription: boolean,
): number {
	if (verbatimName || verbatimDescription) {
		return (
			(verbatimName ? SEARCH_MATCH_SCORE_SYMBOL_NAME_VERBATIM : 0) +
			(verbatimDescription ? SEARCH_MATCH_SCORE_SYMBOL_DESCRIPTION_VERBATIM : 0)
		);
	}

	return (
		(greedyName ? SEARCH_MATCH_SCORE_SYMBOL_NAME_GREEDY : 0) +
		(greedyDescription ? SEARCH_MATCH_SCORE_SYMBOL_DESCRIPTION_GREEDY : 0)
	);
}

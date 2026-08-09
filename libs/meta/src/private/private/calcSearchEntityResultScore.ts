import {
	SEARCH_MATCH_SCORE_ENTITY_DESCRIPTION_GREEDY,
	SEARCH_MATCH_SCORE_ENTITY_DESCRIPTION_VERBATIM,
	SEARCH_MATCH_SCORE_ENTITY_NAME_GREEDY,
	SEARCH_MATCH_SCORE_ENTITY_NAME_VERBATIM,
} from '../constants';

export function calcSearchEntityResultScore(
	symbolScore: number,
	verbatimName: boolean,
	verbatimDescription: boolean,
	greedyName: boolean,
	greedyDescription: boolean,
): number {
	if (verbatimName || verbatimDescription) {
		return (
			symbolScore +
			(verbatimName ? SEARCH_MATCH_SCORE_ENTITY_NAME_VERBATIM : 0) +
			(verbatimDescription ? SEARCH_MATCH_SCORE_ENTITY_DESCRIPTION_VERBATIM : 0)
		);
	}

	return (
		symbolScore +
		(greedyName ? SEARCH_MATCH_SCORE_ENTITY_NAME_GREEDY : 0) +
		(greedyDescription ? SEARCH_MATCH_SCORE_ENTITY_DESCRIPTION_GREEDY : 0)
	);
}

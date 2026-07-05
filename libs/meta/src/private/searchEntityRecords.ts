import type { SearchEntityResult } from '../types';

import { ENTITY_SEARCH_LIMIT } from './constants';
import { calcSearchEntityResultScore, searchSymbolRecords } from './private/';
import type { SearchEntityRecord } from './types';

function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function searchEntityRecords(
	searchRecords: SearchEntityRecord[],
	terms: string,
): SearchEntityResult[] {
	if (!terms.trim()) {
		return [];
	}

	const verbatim = terms.trim().replace(/\s+/g, ' ');
	const regexpVerbatim = new RegExp(escapeRegExp(verbatim), 'i');

	const greedyParts = verbatim
		.split(/\s+/)
		.filter(s => s.length > 2)
		.map(escapeRegExp)
		.sort((a, b) => b.length - a.length);

	const regexpGreedy = greedyParts.length > 1 ? new RegExp(greedyParts.join('|'), 'i') : undefined;

	const results: SearchEntityResult[] = [];

	for (const record of searchRecords) {
		if (results.length >= ENTITY_SEARCH_LIMIT) {
			break;
		}

		const verbatimName = regexpVerbatim.test(record.entity.name);
		const verbatimDescription = record.entityDescription
			? regexpVerbatim.test(record.entityDescription)
			: false;

		const beGreedy = regexpGreedy && !verbatimName && !verbatimDescription;
		const greedyName = beGreedy ? regexpGreedy.test(record.entity.name) : false;
		const greedyDescription =
			beGreedy && record.entityDescription ? regexpGreedy.test(record.entityDescription) : false;

		const [symbolScore, matchedSymbols] = searchSymbolRecords(
			record.symbols,
			regexpVerbatim,
			regexpGreedy,
		);

		const entityScore = calcSearchEntityResultScore(
			symbolScore,
			verbatimName,
			verbatimDescription,
			greedyName,
			greedyDescription,
		);

		const matchedName = verbatimName || greedyName;
		const matchedDescription = verbatimDescription || greedyDescription;

		if (!matchedName && !matchedDescription && !matchedSymbols.length) {
			continue;
		}

		results.push({
			entity: record.entity,
			symbols: matchedSymbols,
			score: entityScore,
		});
	}

	return results.sort((a, b) => b.score - a.score);
}

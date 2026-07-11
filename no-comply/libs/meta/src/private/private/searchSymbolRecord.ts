import type { SearchSymbolResult } from '../../types';
import type { SearchSymbolRecord } from '../types';

import { calcSearchSymbolResultScore } from './calcSearchSymbolResultScore';

export function searchSymbolRecords(
	symbols: SearchSymbolRecord[],
	verbatim: RegExp,
	greedy?: RegExp,
): [score: number, results: SearchSymbolResult[]] {
	const withMatch: [SearchSymbolResult | undefined, number][] = symbols.map(record => {
		const verbatimName = verbatim.test(record.symbol.name);
		const verbatimDescription = record.description ? verbatim.test(record.description) : false;

		const beGreedy = greedy && !verbatimName && !verbatimDescription;
		const greedyName = beGreedy ? greedy.test(record.symbol.name) : false;
		const greedyDescription =
			beGreedy && record.description ? greedy.test(record.description) : false;

		const matchedName = verbatimName || greedyName;
		const matchedDescription = verbatimDescription || greedyDescription;

		if (!matchedName && !matchedDescription) {
			return [undefined, 0];
		}

		const score = calcSearchSymbolResultScore(
			verbatimName,
			verbatimDescription,
			greedyName,
			greedyDescription,
		);

		const symbolResult: SearchSymbolResult = {
			symbol: record.symbol,
			description: record.description,
			matchedName,
			matchedDescription,
			tags: record.tags,
			score,
		};
		return [symbolResult, score];
	});

	let totalScore = 0;
	const filtered: SearchSymbolResult[] = [];

	for (const [result, symbol] of withMatch) {
		if (result !== undefined) {
			filtered.push(result);
			totalScore += symbol;
		}
	}

	return [totalScore, filtered];
}

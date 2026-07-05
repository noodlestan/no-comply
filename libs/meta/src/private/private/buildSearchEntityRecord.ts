import type { DeclaredSymbolTypes } from '@purrception/lang-ts';
import type { LanguageDeclaredSymbol } from '@purrception/primitives';

import type { NoComplyEntityData } from '../../entities';
import type { SearchEntityRecord, SearchSymbolRecord } from '../types';

export function buildSearchEntityRecord(entity: NoComplyEntityData): SearchEntityRecord {
	const symbols: SearchSymbolRecord[] = [];

	for (const symbol of Object.values(entity.symbols.declared)) {
		if (!('lang' in symbol)) {
			continue;
		}

		const languageSymbol = symbol as LanguageDeclaredSymbol<string>;

		if (languageSymbol.lang !== '@purrception/lang-ts') {
			continue;
		}

		const tsSymbol = languageSymbol as DeclaredSymbolTypes;

		const node = tsSymbol.node;

		if (!node) {
			continue;
		}

		const { description, tags } = node;

		if (!description && !tags) {
			continue;
		}

		symbols.push({ symbol, description, tags });
	}

	return {
		entity,
		entityDescription: entity.description,
		symbols,
	};
}

import type { ImportedSymbol } from '@purrception/primitives';

import type { NoComplyEntityData } from '../entities/types';

export type SymbolImportResult =
	| { status: 'local' }
	| { status: 'imported'; symbol: ImportedSymbol; isLocalPackage: boolean; errorId: string }
	| { status: 'unknown'; errorId: string };

export function resolveSymbolImport(entity: NoComplyEntityData, token: string): SymbolImportResult {
	const errorId = `token "${token}" in entity "${entity.type}:${entity.name}"`;

	if (token in entity.symbols.declared) {
		return { status: 'local' };
	}

	const importedSymbol = entity.symbols.imported[token];

	if (!importedSymbol) {
		return { status: 'unknown', errorId };
	}

	const isLocalPackage = importedSymbol.from.startsWith('./');
	return { status: 'imported', symbol: importedSymbol, isLocalPackage, errorId };
}

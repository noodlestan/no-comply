import type { ImportedSymbol } from '@purrception/primitives';

import type { NoComplyEntityData } from '../entities/types';

export function matchEntityByImport(
	entity: NoComplyEntityData,
	importedSymbol: ImportedSymbol,
	isLocalPackage: boolean,
	getEntities: () => NoComplyEntityData[],
): NoComplyEntityData | undefined {
	const allEntities = getEntities();

	const matches = allEntities.filter(candidate => {
		if (isLocalPackage && candidate.package !== entity.package) {
			return false;
		} else if (!isLocalPackage && candidate.package !== importedSymbol.from) {
			return false;
		}
		return importedSymbol.name in candidate.symbols.declared;
	});

	if (matches.length > 1) {
		const errorId = `import of "${importedSymbol.name}" in entity "${entity.type}:${entity.name}"`;
		console.warn(`Multiple entities matched ${errorId}.`);
	}

	return matches[0];
}

import type { EntityDataBase } from '@purrception/primitives';

import { useMeta } from '../../Meta';

export const getTokenEntityMaybe = (
	entity: EntityDataBase,
	token: string,
): EntityDataBase | undefined => {
	const errorId = `token "${token}" in entity "${entity.type}:${entity.name}"`;
	const localType = token in entity.symbols.exported;

	if (localType) {
		return entity;
	}

	const importedSymbol = entity.symbols.imported[token];

	if (!importedSymbol) {
		console.warn(`Unresolved ${errorId} (unknown symbol).`);
		return undefined;
	}

	const isLocalPackage = importedSymbol?.from.startsWith('./');

	const { getEntities } = useMeta();
	const allEntities = getEntities();
	const matches = allEntities.filter(candidate => {
		if (isLocalPackage && candidate.package !== entity.package) {
			return false;
		} else if (!isLocalPackage && candidate.package !== importedSymbol.from) {
			return false;
		}
		return importedSymbol.name in candidate.symbols.exported;
	});

	if (matches.length > 1) {
		console.warn(`Multiple entities matched ${errorId}.`);
	}

	const targetEntity = matches[0];

	if (!targetEntity) {
		console.warn(`Unresolved ${errorId} (no entity matched).`);
		return undefined;
	}

	return targetEntity;
};

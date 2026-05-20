import type { EntityDataBase } from '@purrception/primitives';

import { useMeta } from '../../Meta';

export const getTokenEntityMaybe = (
	entity: EntityDataBase,
	token: string,
): EntityDataBase | undefined => {
	const localType = token in entity.symbols.exported;

	if (localType) {
		return entity;
	}

	const importedSymbol = entity.symbols.imported[token];

	if (!importedSymbol) {
		console.warn(`Unresolved token "${token}" in entity "${entity.name}".`);
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

	const targetEntity = matches[0];

	if (!targetEntity) {
		console.warn(`Multiple entities for "${token}" in entity "${entity.name}".`);
		return undefined;
	}

	return targetEntity;
};

import { type TypeDeclaration, isTypeDeclaration } from '@purrception/lang-ts';

import type { NoComplyEntityData } from '../types';

type FilterFunction = (func: TypeDeclaration) => boolean;
type Filter = string[] | FilterFunction;

export function getEntityTypes(entity: NoComplyEntityData, filter?: Filter): TypeDeclaration[] {
	const items = Object.values(entity.symbols.declared).filter(isTypeDeclaration);

	if (Array.isArray(filter)) {
		return items.filter(item => filter.includes(item.name));
	}
	if (typeof filter === 'function') {
		return items.filter(filter);
	}

	return items;
}

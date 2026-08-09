import { type FunctionDeclaration, isFunctionDeclaration } from '@purrception/lang-ts';

import type { NoComplyEntityData } from '../types';

type FilterFunction = (func: FunctionDeclaration) => boolean;
type Filter = string[] | FilterFunction;

export function getEntityFunctions(
	entity: NoComplyEntityData,
	filter?: Filter,
): FunctionDeclaration[] {
	const items = Object.values(entity.symbols.declared).filter(isFunctionDeclaration);

	if (Array.isArray(filter)) {
		return items.filter(item => filter.includes(item.name));
	}
	if (typeof filter === 'function') {
		return items.filter(filter);
	}

	return items;
}

import { type FunctionDeclaration, isFunctionDeclaration } from '@purrception/lang-ts';

import type { ComponentEntityData } from '../types';

export function resolveComponentFactoryDeclaration(
	entity: ComponentEntityData,
): FunctionDeclaration {
	const name = entity.factory;
	const factory = entity.symbols.declared[name];
	if (!factory || !isFunctionDeclaration(factory)) {
		throw new Error();
	}
	return factory as FunctionDeclaration;
}

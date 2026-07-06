import { type FunctionDeclaration, isFunctionDeclaration } from '@purrception/lang-ts';

import type { ComponentEntityData } from '../types';

export function resolveComponentFactoryDeclaration(
	entity: ComponentEntityData,
): FunctionDeclaration | undefined {
	const name = entity.factory;
	const factory = entity.symbols.declared[name];
	if (factory && !isFunctionDeclaration(factory)) {
		throw new Error(`Could not resolve component factory declaration "${name}"`);
	}
	return factory;
}

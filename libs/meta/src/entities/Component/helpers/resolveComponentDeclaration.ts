import { type ComponentDeclaration, isComponentDeclaration } from '@purrception/lang-ts';

import type { ComponentEntityData } from '../types';

export function resolveComponentDeclaration(entity: ComponentEntityData): ComponentDeclaration {
	const name = entity.component;
	const component = entity.symbols.declared[name];
	if (!component || !isComponentDeclaration(component)) {
		throw new Error(`Could not resolve component declaration "${name}"`);
	}
	return component as ComponentDeclaration;
}

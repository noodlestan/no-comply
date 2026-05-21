import type { EntityDataBase } from '@purrception/primitives';

import type { ResolveTypeContext } from './types';

export function createResolveTypeContext(
	resolveEntity: (entity: EntityDataBase, type: string) => EntityDataBase | undefined,
	entity: EntityDataBase,
	stack?: Set<string>,
): ResolveTypeContext {
	return {
		entity,
		stack: stack ?? new Set<string>(),
		resolveEntity,
	};
}

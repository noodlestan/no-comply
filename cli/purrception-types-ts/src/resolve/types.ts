import type { EntityDataBase } from '@purrception/primitives';

export type ResolveTypeContext = {
	entity: EntityDataBase;
	stack: Set<string>;
	resolveEntity: (entity: EntityDataBase, type: string) => EntityDataBase | undefined;
};

import type { EntityDataBase, EntityDataBasePartial } from '@purrception/primitives';
import type { TypeDeclaration } from '@purrception/types-ts';

export type NoComplyEntityPartial = EntityDataBasePartial & {
	module: string | undefined;
	path: string;
};

export type NoComplyEntityData = EntityDataBase & NoComplyEntityPartial;

export type NoComplyEntityDataWithTypes = {
	types: Record<string, TypeDeclaration>;
};

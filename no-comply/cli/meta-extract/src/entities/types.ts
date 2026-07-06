import type { TypeDeclaration } from '@purrception/lang-ts';
import type { EntityDataBase, EntityDataBasePartial } from '@purrception/primitives';

export type NoComplyEntityPartial = EntityDataBasePartial & {
	module: string | undefined;
	path: string;
};

export type NoComplyEntityData = EntityDataBase & NoComplyEntityPartial;

export type NoComplyEntityDataWithTypes = {
	types: Record<string, TypeDeclaration>;
};

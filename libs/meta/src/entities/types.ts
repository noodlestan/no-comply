import type { EntityDataBase, EntityDataBasePartial } from '@purrception/primitives';

export type NoComplyEntityPartial<T extends string = string> = EntityDataBasePartial<T> & {
	module: string | undefined;
	path: string;
};

export type NoComplyEntityData = EntityDataBase & NoComplyEntityPartial;

import type { EntityDataBase, EntityDataBasePartial } from '@purrception/primitives';

export type NoComplyEntityPartial = EntityDataBasePartial & {
	module: string | undefined;
	path: string;
};

export type NoComplyEntityData = EntityDataBase & NoComplyEntityPartial;

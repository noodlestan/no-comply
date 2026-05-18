import type { EntityDataBase, EntityDataBasePartial } from '@purrception/primitives';

export type NoComplyEntityPartial = EntityDataBasePartial & {
	module: string | undefined;
	package: string;
	path: string;
};

export type NoComplyEntityData = EntityDataBase & NoComplyEntityPartial;

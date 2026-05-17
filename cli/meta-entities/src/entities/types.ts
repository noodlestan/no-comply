import type { EntityDataBase } from '@purrception/primitives';

export type NoComplyEntityData = EntityDataBase & {
	module: string | undefined;
	package: string;
};

import type { EntityDataBase } from '@purrception/primitives';
import type { FunctionData, TypeDeclarationData } from '@purrception/profile-ts';

export type ContextEntityPartial = EntityDataBase & {
	type: 'context';
};

export type ContextEntityData = ContextEntityPartial & {
	factories: FunctionData[];
	types: TypeDeclarationData[];
};

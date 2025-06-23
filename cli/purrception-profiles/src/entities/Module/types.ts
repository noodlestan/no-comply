import type { EntityDataBase } from '@purrception/primitives';
import type { FunctionData, TypeDeclarationData } from '@purrception/profile-ts';

export type ModuleEntityPartial = EntityDataBase & {
	type: 'module';
};

export type ModuleEntityData = ModuleEntityPartial & {
	helpers: FunctionData[];
	types: TypeDeclarationData[];
};

import type { EntityDataBase } from '@purrception/primitives';
import type { FunctionData, TypeDeclarationData } from '@purrception/profile-ts';

export type ControllerEntityPartial = EntityDataBase & {
	type: 'controller';
};

export type ControllerEntityData = ControllerEntityPartial & {
	factories: FunctionData[];
	types: TypeDeclarationData[];
};

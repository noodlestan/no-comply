import type { FunctionData, TypeDeclarationData } from '@purrception/extract-ts';
import type { EntityDataBase } from '@purrception/primitives';

export type ControllerEntityFiles = {
	implementation: string;
	types: string;
};

export type ControllerEntityPartial = EntityDataBase & {
	type: 'controller';
};

export type ControllerEntityData = ControllerEntityPartial & {
	factories: FunctionData[];
	types: TypeDeclarationData[];
};

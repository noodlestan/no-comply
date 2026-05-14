import type { EntityDataBase } from '@purrception/primitives';
import type { FunctionData, TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

export type ControllerEntityFiles = {
	implementation: string;
	types: string;
};

export type ControllerEntityPartial = EntityDataBase & {
	type: 'controller';
};

export type ControllerEntityData = ControllerEntityPartial & {
	factories: FunctionData[];
	types: (TypeDeclarationData | TypeAliasData)[];
};

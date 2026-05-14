import type { EntityDataBase } from '@purrception/primitives';
import type { FunctionData, TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

export type ModuleEntityFiles = {
	types?: string;
	helpers: string[];
};

export type ModuleEntityPartial = EntityDataBase & {
	type: 'module';
};

export type ModuleEntityData = ModuleEntityPartial & {
	helpers: FunctionData[];
	types: (TypeDeclarationData | TypeAliasData)[];
};

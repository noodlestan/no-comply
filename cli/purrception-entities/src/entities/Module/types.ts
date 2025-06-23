import type { FunctionData, TypeDeclarationData } from '@purrception/extract-ts';
import type { EntityDataBase } from '@purrception/primitives';

export type ModuleEntityFiles = {
	types?: string;
	helpers: string[];
};

export type ModuleEntityPartial = EntityDataBase & {
	type: 'module';
};

export type ModuleEntityData = ModuleEntityPartial & {
	helpers: FunctionData[];
	types: TypeDeclarationData[];
};

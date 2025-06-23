import type { FunctionData, TypeDeclarationData } from '@purrception/extract-ts';
import type { EntityDataBase } from '@purrception/primitives';

export type ContextEntityFiles = {
	implementation: string;
	types?: string;
};

export type ContextEntityPartial = EntityDataBase & {
	type: 'context';
};

export type ContextEntityData = ContextEntityPartial & {
	factories: FunctionData[];
	types: TypeDeclarationData[];
};

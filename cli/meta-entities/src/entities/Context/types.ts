import type { EntityDataBase } from '@purrception/primitives';
import type { FunctionData, TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

export type ContextEntityFiles = {
	implementation: string;
	types?: string;
};

export type ContextEntityPartial = EntityDataBase & {
	type: 'context';
};

export type ContextEntityData = ContextEntityPartial & {
	factories: FunctionData[];
	types: (TypeDeclarationData | TypeAliasData)[];
};

import type { EntityDataBase } from '@purrception/primitives';
import type { FunctionData, TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

export type ServiceEntityFiles = {
	implementation: string;
	types: string;
};

export type ServiceEntityPartial = EntityDataBase & {
	type: 'service';
};

export type ServiceEntityData = ServiceEntityPartial & {
	factories: FunctionData[];
	types: (TypeDeclarationData | TypeAliasData)[];
};

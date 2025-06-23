import type { FunctionData, TypeDeclarationData } from '@purrception/extract-ts';
import type { EntityDataBase } from '@purrception/primitives';

export type ServiceEntityFiles = {
	implementation: string;
	types: string;
};

export type ServiceEntityPartial = EntityDataBase & {
	type: 'service';
};

export type ServiceEntityData = ServiceEntityPartial & {
	factories: FunctionData[];
	types: TypeDeclarationData[];
};

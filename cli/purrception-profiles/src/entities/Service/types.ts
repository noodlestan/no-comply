import type { EntityDataBase } from '@purrception/primitives';
import type { FunctionData, TypeDeclarationData } from '@purrception/profile-ts';

export type ServiceEntityPartial = EntityDataBase & {
	type: 'service';
};

export type ServiceEntityData = ServiceEntityPartial & {
	factories: FunctionData[];
	types: TypeDeclarationData[];
};

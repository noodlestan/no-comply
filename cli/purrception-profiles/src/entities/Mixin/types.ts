import type { EntityDataBase } from '@purrception/primitives';
import type { FunctionData, TypeDeclarationData } from '@purrception/profile-ts';

export type MixinEntityPartial = EntityDataBase & {
	type: 'mixin';
};

export type MixinEntityData = MixinEntityPartial & {
	factories: FunctionData[];
	types: TypeDeclarationData[];
};

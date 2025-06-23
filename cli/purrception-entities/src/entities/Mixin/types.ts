import type { FunctionData, TypeDeclarationData } from '@purrception/extract-ts';
import type { EntityDataBase } from '@purrception/primitives';

export type MixinEntityFiles = {
	implementation: string;
	types: string;
};

export type MixinEntityPartial = EntityDataBase & {
	type: 'mixin';
};

export type MixinEntityData = MixinEntityPartial & {
	factories: FunctionData[];
	types: TypeDeclarationData[];
};

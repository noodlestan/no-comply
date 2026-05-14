import type { EntityDataBase } from '@purrception/primitives';
import type { FunctionData, TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

export type MixinEntityFiles = {
	implementation: string;
	types: string;
};

export type MixinEntityPartial = EntityDataBase & {
	type: 'mixin';
};

export type MixinEntityData = MixinEntityPartial & {
	factories: FunctionData[];
	types: (TypeDeclarationData | TypeAliasData)[];
};

import type { ComponentData, FunctionData, TypeDeclarationData } from '@purrception/extract-ts';
import type { EntityDataBase } from '@purrception/primitives';

export type ProviderEntityFiles = {
	implementation: string;
	hooks: string[];
};

export type ProviderEntityPartial = EntityDataBase & {
	type: 'provider';
};

export type ProviderEntityData = ProviderEntityPartial & {
	components: ComponentData[];
	hooks: FunctionData[];
	types: TypeDeclarationData[];
};

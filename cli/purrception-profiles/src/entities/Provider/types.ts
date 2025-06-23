import type { EntityDataBase } from '@purrception/primitives';
import type { ComponentData, FunctionData, TypeDeclarationData } from '@purrception/profile-ts';

export type ProviderEntityPartial = EntityDataBase & {
	type: 'provider';
};

export type ProviderEntityData = ProviderEntityPartial & {
	components: ComponentData[];
	hooks: FunctionData[];
	types: TypeDeclarationData[];
};

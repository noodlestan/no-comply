import type { EntityDataBase } from '@purrception/primitives';
import type {
	ComponentData,
	FunctionData,
	TypeAliasData,
	TypeDeclarationData,
} from '@purrception/types-ts';

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
	types: (TypeDeclarationData | TypeAliasData)[];
};

import type { ImportedSymbol } from '@purrception/extract-ts';
import type {
	ComponentData,
	FunctionData,
	TypeAliasData,
	TypeDeclarationData,
} from '@purrception/types-ts';

import type { NoComplyEntityData } from '../types';

export type ProviderEntityFiles = {
	implementation: string;
	hooks: string[];
};

export type ProviderEntityPartial = NoComplyEntityData & {
	type: 'provider';
};

export type ProviderEntityData = ProviderEntityPartial & {
	components: ComponentData[];
	hooks: FunctionData[];
	types: (TypeDeclarationData | TypeAliasData)[];
	dependencies: Record<string, ImportedSymbol>;
};

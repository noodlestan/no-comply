import type {
	ComponentDeclaration,
	FunctionDeclaration,
	TypeDeclaration,
} from '@purrception/types-ts';

import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ProviderEntityFiles = {
	implementation: string;
	hooks: string[];
};

export type ProviderEntityPartial = NoComplyEntityPartial & {
	type: 'provider';
};

export type ProviderEntityData = ProviderEntityPartial &
	NoComplyEntityData & {
		components: ComponentDeclaration[];
		hooks: FunctionDeclaration[];
		types: Record<string, TypeDeclaration>;
	};

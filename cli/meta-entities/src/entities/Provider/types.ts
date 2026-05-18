import type {
	ComponentDeclarationNode,
	DeclarationTypeNode,
	FunctionDeclarationNode,
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
		components: ComponentDeclarationNode[];
		hooks: FunctionDeclarationNode[];
		types: Record<string, DeclarationTypeNode>;
	};

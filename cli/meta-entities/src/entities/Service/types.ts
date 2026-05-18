import type { DeclarationTypeNode, FunctionDeclarationNode } from '@purrception/types-ts';

import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ServiceEntityFiles = {
	implementation: string;
	types: string;
};

export type ServiceEntityPartial = NoComplyEntityPartial & {
	type: 'service';
};

export type ServiceEntityData = ServiceEntityPartial &
	NoComplyEntityData & {
		factories: FunctionDeclarationNode[];
		types: Record<string, DeclarationTypeNode>;
	};

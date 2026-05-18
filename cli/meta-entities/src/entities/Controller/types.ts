import type { DeclarationTypeNode, FunctionDeclarationNode } from '@purrception/types-ts';

import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ControllerEntityFiles = {
	implementation: string;
	types: string;
};

export type ControllerEntityPartial = NoComplyEntityPartial & {
	type: 'controller';
};

export type ControllerEntityData = ControllerEntityPartial &
	NoComplyEntityData & {
		factories: FunctionDeclarationNode[];
		types: Record<string, DeclarationTypeNode>;
	};

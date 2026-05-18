import type {
	ComponentDeclarationNode,
	DeclarationTypeNode,
	FunctionDeclarationNode,
} from '@purrception/types-ts';

import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ComponentEntityFiles = {
	implementation: string;
	factory: string;
	types: string;
};

export type ComponentEntityPartial = NoComplyEntityPartial & {
	type: 'component';
};

export type ComponentEntityData = ComponentEntityPartial &
	NoComplyEntityData & {
		component: ComponentDeclarationNode;
		factory: FunctionDeclarationNode;
		types: Record<string, DeclarationTypeNode>;
	};

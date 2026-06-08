import type {
	ComponentDeclaration,
	FunctionDeclaration,
	TypeDeclaration,
} from '@purrception/lang-ts';

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
		component: ComponentDeclaration;
		factory: FunctionDeclaration;
		types: Record<string, TypeDeclaration>;
	};

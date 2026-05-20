import type { FunctionDeclaration, TypeDeclaration } from '@purrception/types-ts';

import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ContextEntityFiles = {
	implementation: string;
	types?: string;
};

export type ContextEntityPartial = NoComplyEntityPartial & {
	type: 'context';
};

export type ContextEntityData = ContextEntityPartial &
	NoComplyEntityData & {
		factories: FunctionDeclaration[];
		types: Record<string, TypeDeclaration>;
	};

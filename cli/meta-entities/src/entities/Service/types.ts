import type { FunctionDeclaration, TypeDeclaration } from '@purrception/lang-ts';

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
		factories: FunctionDeclaration[];
		types: Record<string, TypeDeclaration>;
	};

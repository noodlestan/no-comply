import type { FunctionDeclaration, TypeDeclaration } from '@purrception/lang-ts';

import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ModuleEntityFiles = {
	types?: string;
	helpers: string[];
};

export type ModuleEntityPartial = NoComplyEntityPartial & {
	type: 'module';
};

export type ModuleEntityData = ModuleEntityPartial &
	NoComplyEntityData & {
		helpers: FunctionDeclaration[];
		types: Record<string, TypeDeclaration>;
	};

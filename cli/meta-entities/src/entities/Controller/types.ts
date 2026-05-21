import type { FunctionDeclaration, TypeDeclaration } from '@purrception/lang-ts';

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
		factories: FunctionDeclaration[];
		types: Record<string, TypeDeclaration>;
	};

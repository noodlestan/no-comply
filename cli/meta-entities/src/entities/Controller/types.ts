import type { ImportedSymbol } from '@purrception/extract-ts';
import type { FunctionData, TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

import type { NoComplyEntityData } from '../types';

export type ControllerEntityFiles = {
	implementation: string;
	types: string;
};

export type ControllerEntityPartial = NoComplyEntityData & {
	type: 'controller';
};

export type ControllerEntityData = ControllerEntityPartial & {
	factories: FunctionData[];
	types: (TypeDeclarationData | TypeAliasData)[];
	dependencies: Record<string, ImportedSymbol>;
};

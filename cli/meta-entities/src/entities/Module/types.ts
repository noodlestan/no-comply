import type { ImportedSymbol } from '@purrception/extract-ts';
import type { FunctionData, TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

import type { NoComplyEntityData } from '../types';

export type ModuleEntityFiles = {
	types?: string;
	helpers: string[];
};

export type ModuleEntityPartial = NoComplyEntityData & {
	type: 'module';
};

export type ModuleEntityData = ModuleEntityPartial & {
	helpers: FunctionData[];
	types: (TypeDeclarationData | TypeAliasData)[];
	dependencies: Record<string, ImportedSymbol>;
};

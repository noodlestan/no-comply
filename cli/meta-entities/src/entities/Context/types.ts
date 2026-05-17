import type { ImportedSymbol } from '@purrception/extract-ts';
import type { FunctionData, TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

import type { NoComplyEntityData } from '../types';

export type ContextEntityFiles = {
	implementation: string;
	types?: string;
};

export type ContextEntityPartial = NoComplyEntityData & {
	type: 'context';
};

export type ContextEntityData = ContextEntityPartial & {
	factories: FunctionData[];
	types: (TypeDeclarationData | TypeAliasData)[];
	dependencies: Record<string, ImportedSymbol>;
};

import type { ImportedSymbol } from '@purrception/extract-ts';
import type { FunctionData, TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

import type { NoComplyEntityData } from '../types';

export type ServiceEntityFiles = {
	implementation: string;
	types: string;
};

export type ServiceEntityPartial = NoComplyEntityData & {
	type: 'service';
};

export type ServiceEntityData = ServiceEntityPartial & {
	factories: FunctionData[];
	types: (TypeDeclarationData | TypeAliasData)[];
	dependencies: Record<string, ImportedSymbol>;
};

import type { ImportedSymbol } from '@purrception/extract-ts';
import type { FunctionData, TypeAliasData, TypeDeclarationData } from '@purrception/types-ts';

import type { NoComplyEntityData } from '../types';

export type MixinEntityFiles = {
	implementation: string;
	types: string;
};

export type MixinEntityPartial = NoComplyEntityData & {
	type: 'mixin';
};

export type MixinEntityData = MixinEntityPartial & {
	factories: FunctionData[];
	types: (TypeDeclarationData | TypeAliasData)[];
	dependencies: Record<string, ImportedSymbol>;
};

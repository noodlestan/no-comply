import type { DeclaredSymbol, DocsTags } from '@purrception/primitives';

import type { NoComplyEntityData } from '../entities';

export type ResolvedExpression = {
	pkg?: string;
	type?: string;
	name: string;
};
export type SearchSymbolRecord = {
	symbol: DeclaredSymbol;
	description?: string;
	tags?: DocsTags;
};

export type SearchEntityRecord = {
	entity: NoComplyEntityData;
	entityDescription: string | undefined;
	symbols: SearchSymbolRecord[];
};

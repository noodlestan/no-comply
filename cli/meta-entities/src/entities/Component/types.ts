import type { ImportedSymbol } from '@purrception/extract-ts';
import type {
	ComponentData,
	FunctionData,
	TypeAliasData,
	TypeDeclarationData,
} from '@purrception/types-ts';

import type { NoComplyEntityData } from '../types';

export type ComponentEntityFiles = {
	implementation: string;
	factory: string;
	types: string;
};

export type ComponentEntityPartial = NoComplyEntityData & {
	type: 'component';
};

export type ComponentEntityData = ComponentEntityPartial & {
	component: ComponentData;
	factory: FunctionData;
	types: (TypeDeclarationData | TypeAliasData)[];
	dependencies: Record<string, ImportedSymbol>;
};

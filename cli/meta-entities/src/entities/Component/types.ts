import type { EntityDataBase } from '@purrception/primitives';
import type {
	ComponentData,
	FunctionData,
	TypeAliasData,
	TypeDeclarationData,
} from '@purrception/types-ts';

export type ComponentEntityFiles = {
	implementation: string;
	factory: string;
	types: string;
};

export type ComponentEntityPartial = EntityDataBase & {
	type: 'component';
};

export type ComponentEntityData = ComponentEntityPartial & {
	component: ComponentData;
	factory: FunctionData;
	types: (TypeDeclarationData | TypeAliasData)[];
};

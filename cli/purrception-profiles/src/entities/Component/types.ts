import type { ComponentData, FunctionData, TypeDeclarationData } from '@purrception/extract-ts';
import type { EntityDataBase } from '@purrception/primitives';

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
	types: TypeDeclarationData[];
};

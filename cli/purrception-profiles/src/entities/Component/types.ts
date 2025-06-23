import type { EntityDataBase } from '@purrception/primitives';
import type { ComponentData, FunctionData, TypeDeclarationData } from '@purrception/profile-ts';

export type ComponentEntityPartial = EntityDataBase & {
	type: 'component';
};

export type ComponentEntityData = ComponentEntityPartial & {
	component: ComponentData;
	factory: FunctionData;
	types: TypeDeclarationData[];
};

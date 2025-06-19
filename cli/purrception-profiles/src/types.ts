import type { EntityData } from '@purrception/primitives';
import type { FunctionData, TypeDeclarationData } from '@purrception/profile-ts';

export type ControllerData = EntityData & {
	types: TypeDeclarationData[];
	factories: FunctionData[];
};

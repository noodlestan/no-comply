import type { EntityExtractMeta } from '@purrception/primitives';
import type { FunctionMeta, TypeMeta } from '@purrception/profile-ts';

export type ControllerMeta = EntityExtractMeta & {
	types: TypeMeta[];
	factories: FunctionMeta[];
};

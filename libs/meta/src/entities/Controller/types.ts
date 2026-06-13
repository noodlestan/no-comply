import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ControllerEntityFiles = {
	index: string;
	implementation: string;
	types: string;
};

export type ControllerEntityPartial = NoComplyEntityPartial & {
	type: 'controller';
};

export type ControllerEntityData = ControllerEntityPartial &
	NoComplyEntityData & {
		factories: string[];
	};

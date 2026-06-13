import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ModuleEntityFiles = {
	index: string;
	types?: string;
	helpers: string[];
};

export type ModuleEntityPartial = NoComplyEntityPartial & {
	type: 'module';
};

export type ModuleEntityData = ModuleEntityPartial &
	NoComplyEntityData & {
		helpers: string[];
	};

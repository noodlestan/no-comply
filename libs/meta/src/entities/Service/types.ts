import type { NoComplyEntityData, NoComplyEntityPartial } from '../types.js';

export type ServiceEntityFiles = {
	index: string;
	implementation: string;
	types: string;
};

export type ServiceEntityPartial = NoComplyEntityPartial & {
	type: 'service';
};

export type ServiceEntityData = ServiceEntityPartial &
	NoComplyEntityData & {
		factories: string[];
	};

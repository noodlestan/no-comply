import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ServiceEntityFiles = {
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

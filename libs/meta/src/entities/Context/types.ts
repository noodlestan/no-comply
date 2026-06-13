import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ContextEntityFiles = {
	index: string;
	implementation: string;
	types?: string;
};

export type ContextEntityPartial = NoComplyEntityPartial & {
	type: 'context';
};

export type ContextEntityData = ContextEntityPartial &
	NoComplyEntityData & {
		factories: string[];
	};

import type { NoComplyEntityData, NoComplyEntityPartial } from '../types.js';

export type ProviderEntityFiles = {
	index: string;
	implementation: string;
	hooks: string[];
};

export type ProviderEntityPartial = NoComplyEntityPartial & {
	type: 'provider';
};

export type ProviderEntityData = ProviderEntityPartial &
	NoComplyEntityData & {
		components: string[];
		hooks: string[];
	};

import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ProviderEntityFiles = {
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

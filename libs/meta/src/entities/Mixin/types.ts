import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type MixinEntityFiles = {
	implementation: string;
	types: string;
};

export type MixinEntityPartial = NoComplyEntityPartial & {
	type: 'mixin';
};

export type MixinEntityData = MixinEntityPartial &
	NoComplyEntityData & {
		factories: string[];
	};

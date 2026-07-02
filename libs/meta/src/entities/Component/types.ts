import type { NoComplyEntityData, NoComplyEntityPartial } from '../types';

export type ComponentEntityFiles = {
	index: string;
	implementation: string;
	factory?: string;
	types: string;
};

export type ComponentEntityPartial = NoComplyEntityPartial & {
	type: 'component';
};

export type ComponentEntityData = ComponentEntityPartial &
	NoComplyEntityData & {
		group: string;
		component: string;
		factory: string;
	};

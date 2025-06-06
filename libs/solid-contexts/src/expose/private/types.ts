import type { AnyProps } from '@no-comply/solid-primitives';

export type ExposableAPI = {
	id: string;
	name: string;
	parent?: string;
	props: AnyProps;
	args: unknown[];
	compose: <T>(t: T) => T;
	composes: () => unknown[];
};

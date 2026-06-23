import type { AnyProps } from '@no-comply/solid-primitives';

export type ExposedAPI<T extends Record<string, unknown> = Record<string, unknown>> = T & {
	_id?: string;
};

export type ExposedDataProps = {
	'data-xp'?: string;
	'data-xp-id'?: string;
	'data-xp-parent'?: string;
};

export type ExposableAPI = {
	id: string;
	name: string;
	parent?: string;
	props: AnyProps;
	compose: <T>(t: T) => T;
	composes: () => unknown[];
};

import { type AnyProps, shortId } from '@no-comply/solid-primitives';

import type { ExposedDataProps } from '../types';

import type { ExposableAPI } from './types';

export const createExposableAPI = (
	name: string,
	props: AnyProps,
	args: unknown[],
): ExposableAPI => {
	const composes: unknown[] = [];

	return {
		id: shortId(),
		name,
		parent: (props as ExposedDataProps)['data-xp-id'],
		props,
		args,
		compose: <T>(composed: T) => {
			composes.push(composed);
			return composed;
		},
		composes: () => composes,
	};
};

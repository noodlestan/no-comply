import { type AnyProps, shortId } from '@no-comply/solid-primitives';

import type { ExposableAPI, ExposedDataProps } from '../types';

export const createExposableAPI = (name: string, props: AnyProps): ExposableAPI => {
	const composes: unknown[] = [];

	return {
		id: shortId(),
		name,
		parent: (props as ExposedDataProps)['data-xp-id'],
		props,
		compose: <T>(composed: T) => {
			composes.push(composed);
			return composed;
		},
		composes: () => composes,
	};
};

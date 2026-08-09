import { type AnyProps, shortId } from '@no-comply/solid-primitives';

import type { ExposableAPI, ExposedDataProps } from '../types';

/**
 * Transparent wrapper around an entity's exposed API used only to track compositions in development tools
 */
export const createExposableAPI = (name: string, props: AnyProps): ExposableAPI => {
	const composes: unknown[] = [];

	return {
		id: shortId(),
		name,
		parent: (props as ExposedDataProps)['data-xp-id'],
		props,
		/**
		 * transparent wrapper around an entities composed instance, used only to track compositions in development tools
		 */
		compose: <T>(composed: T) => {
			composes.push(composed);
			return composed;
		},
		composes: () => composes,
	};
};

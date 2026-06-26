import type { AnyProps } from '@no-comply/solid-primitives';

import { createExposableAPI } from '../private';
import { useExposeServiceMaybe } from '../providers';
import type { ExposableAPI } from '../types';

const shim = <T>(t: T): T => t;

/**
 * Transparent wrapper around an entity's input props used to track compositions in development tools
 */
export const createExposable = <P extends AnyProps>(
	name: string,
	props: P = {} as P,
): [P, ExposableAPI | undefined, ExposableAPI['compose']] => {
	const expose = useExposeServiceMaybe();

	if (!expose || !expose.isExposeOn()) {
		return [props, undefined, shim];
	}

	const exposable = createExposableAPI(name, props);
	return [props, exposable, exposable.compose];
};

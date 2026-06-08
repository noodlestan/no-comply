import type { AnyProps } from '@no-comply/solid-primitives';

import { createExposableAPI } from '../private';
import { useExposeServiceMaybe } from '../providers';
import type { ExposableAPI } from '../types';

const shim = <T>(t: T): T => t;

export const createExposable = <P extends AnyProps>(
	name: string,
	props: P = {} as P,
	...rest: unknown[]
): [P, ExposableAPI | undefined, ExposableAPI['compose']] => {
	const expose = useExposeServiceMaybe();

	if (!expose || !expose.isExposeOn()) {
		return [props, undefined, shim];
	}

	const exposable = createExposableAPI(name, props, rest);
	return [props, exposable, exposable.compose];
};

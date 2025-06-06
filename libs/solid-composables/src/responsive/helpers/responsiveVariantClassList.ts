import type { ResponsiveProp } from '@no-comply/solid-primitives';

import { responsiveVariantClasses } from './responsiveVariantClasses';

export const responsiveVariantClassList = <const B extends string, T extends string>(
	breakpoints: readonly (B | '_')[],
	prefix: string,
	value: ResponsiveProp<T> | undefined,
	defaultValue?: T,
): Record<string, true> => {
	const classes = responsiveVariantClasses(breakpoints, prefix, value, defaultValue);
	return Object.fromEntries(classes.map(c => [c, true]));
};

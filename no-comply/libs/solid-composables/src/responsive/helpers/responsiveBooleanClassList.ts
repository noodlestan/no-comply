import type { ResponsiveProp } from '@no-comply/solid-primitives';

import { responsiveBooleanClasses } from './responsiveBooleanClasses';

export const responsiveBooleanClassList = <const B extends string>(
	breakpoints: readonly (B | '_')[],
	active: string,
	inactive: string,
	value: ResponsiveProp<boolean> | undefined,
	defaultValue?: boolean,
): Record<string, boolean> => {
	const classes = responsiveBooleanClasses(breakpoints, active, inactive, value, defaultValue);
	return Object.fromEntries(classes.map(c => [c, true]));
};

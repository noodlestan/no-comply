import type { ResponsiveProp } from '@noodlestan/context-ui-primitives';

import { responsiveClassList } from './responsiveClassList';

export const responsiveClassMap = <const B extends string, T extends string>(
    breakpoints: readonly (B | '_')[],
    prefix: string,
    value: ResponsiveProp<T> | undefined,
    defaultValue?: T,
): Record<string, true> => {
    const classes = responsiveClassList(breakpoints, prefix, value, defaultValue);
    return Object.fromEntries(classes.map(c => [c, true]));
};

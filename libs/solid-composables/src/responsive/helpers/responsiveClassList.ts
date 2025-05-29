import type { ResponsiveProp } from '@no-comply/solid-primitives';

export const responsiveClassList = <const B extends string, T extends string>(
    breakpoints: readonly (B | '_')[],
    prefix: string,
    value: ResponsiveProp<T> | undefined,
    defaultValue?: T,
): string[] => {
    const classes: string[] = [];

    if (value === undefined) {
        if (defaultValue !== undefined) {
            classes.push(`${prefix}-${defaultValue}`);
        }
        return classes;
    }

    if (typeof value !== 'object') {
        classes.push(`${prefix}-${value}`);
        return classes;
    }

    // eslint-disable-next-line dot-notation
    const base = value['_'] ?? defaultValue;
    if (base !== undefined) {
        classes.push(`${prefix}-${base}`);
    }

    for (const bp of breakpoints) {
        if (bp === '_') {
            continue;
        }
        const bpValue = value[bp];
        if (bpValue !== undefined) {
            classes.push(`${prefix}-${bpValue}-${bp}`);
        }
    }

    return classes;
};

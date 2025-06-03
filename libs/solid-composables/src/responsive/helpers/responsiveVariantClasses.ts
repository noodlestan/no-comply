import type { ResponsiveProp } from '@no-comply/solid-primitives';

export const responsiveVariantClasses = <const B extends string, T extends string>(
    breakpoints: readonly (B | '_')[],
    prefix: string,
    value: ResponsiveProp<T> | undefined,
    defaultValue?: T,
): string[] => {
    const classes: string[] = [];

    const v = value ?? defaultValue;

    if (v === undefined) {
        return classes;
    }

    if (typeof v !== 'object') {
        classes.push(`${prefix}-${v}`);
        return classes;
    }

    // eslint-disable-next-line dot-notation
    const base = v['_'] ?? defaultValue;
    if (base !== undefined) {
        classes.push(`${prefix}-${base}`);
    }

    for (const bp of breakpoints) {
        if (bp === '_') {
            continue;
        }
        const bpValue = v[bp];
        if (bpValue !== undefined) {
            classes.push(`${prefix}-${bpValue}-${bp}`);
        }
    }

    return classes;
};

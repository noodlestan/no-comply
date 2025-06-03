import type { ResponsiveProp } from '@no-comply/solid-primitives';

export const responsiveBooleanClasses = <const B extends string>(
    breakpoints: readonly (B | '_')[],
    active: string,
    inactive: string,
    value: ResponsiveProp<boolean> | undefined,
    defaultValue?: boolean,
): string[] => {
    const classes: string[] = [];

    const v = value ?? defaultValue;

    if (v === undefined) {
        return classes;
    }

    if (typeof v !== 'object') {
        return [v ? active : inactive];
    }

    // eslint-disable-next-line dot-notation
    const base = v['_'] ?? defaultValue;
    if (base !== undefined) {
        classes.push(v ? active : inactive);
    }

    for (const bp of breakpoints) {
        if (bp === '_') {
            continue;
        }
        const bpActive = v[bp];
        if (bpActive !== undefined) {
            classes.push(bpActive ? `${active}-${bp}` : `${inactive}-${bp}`);
        }
    }

    return classes;
};

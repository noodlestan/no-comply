import type { AccessorOrValue } from '../../private';

export const resolveAttribute = <T>(value: AccessorOrValue<T>): T => {
    if (typeof value === 'function') {
        return (value as () => T)();
    }

    return value;
};

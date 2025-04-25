import type { AccessorOrValue } from '../types';

export const resolveValue = <T>(value: AccessorOrValue<T>): T => {
    if (typeof value === 'function') {
        return (value as () => T)();
    }

    return value;
};

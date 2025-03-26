import type { AccessorOrValue } from './types';

export const resolveAccessorOrValue = <T>(accessorOrValue: AccessorOrValue<T>): T => {
    if (typeof accessorOrValue === 'function') {
        return (accessorOrValue as () => T)();
    }
    return accessorOrValue;
};

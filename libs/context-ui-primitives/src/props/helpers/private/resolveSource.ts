import type { AccessorOrValue } from '../../types';

export function resolveSource<T extends object>(value: AccessorOrValue<T> | undefined): T {
    if (typeof value === 'function') {
        return (value as () => T)();
    }
    return value ?? ({} as T);
}

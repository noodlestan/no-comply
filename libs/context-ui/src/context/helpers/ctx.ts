import type { BaseContext, ContextFactory } from '../private';

export const ctx = <T extends BaseContext>(f: ContextFactory<T>): ContextFactory<T> => {
    return f;
};

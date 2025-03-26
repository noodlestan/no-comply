import type { Accessor } from 'solid-js';

export type AccessorOrValue<T> = Accessor<T> | T;

export type MaybeAccessorOrValue<T> = Accessor<T | undefined> | T | undefined;

export type ComponentAndProps<C, P> = P & {
    component: C;
};

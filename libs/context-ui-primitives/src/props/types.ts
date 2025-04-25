import type { Accessor, Component } from 'solid-js';

export type AccessorOrValue<T> = Accessor<T> | T;

export type MaybeAccessorOrValue<T> = Accessor<T | undefined> | T | undefined;

export type ComponentAndProps<
    P extends Record<string, unknown>,
    Q extends Record<string, unknown> = P,
> = Q & {
    component: Component<P>;
};

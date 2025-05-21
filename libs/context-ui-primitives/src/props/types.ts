import type { Accessor, Component, JSX } from 'solid-js';

export type RenderProp<T> = (props: T) => JSX.Element;

export type MaybeRenderProp<T> = JSX.Element | ((props: T) => JSX.Element);

export type AccessorOrValue<T> = Accessor<T> | T;

export type MaybeAccessorOrValue<T> = Accessor<T | undefined> | T | undefined;

export type PropsWithComponent<P extends Record<string, unknown>, Q extends Partial<P> = P> = Q & {
    component: Component<P>;
};

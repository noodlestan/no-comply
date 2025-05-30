import type { Accessor, Component, JSX } from 'solid-js';

export type RenderProp<T> = (props: T) => JSX.Element;

export type MaybeRenderProp<T> = JSX.Element | ((props: T) => JSX.Element);

export type AccessorOrValue<T> = Accessor<T> | T;

export type MaybeAccessorOrValue<T> = Accessor<T | undefined> | T | undefined;

export type PropsWithComponent<P extends Record<string, unknown>, Q extends Partial<P> = P> = Q & {
    component: Component<P>;
};

export type ResponsiveProp<T, B extends string = string> = T | Partial<Record<'_' | B, T>>;

type UnwrapResponsiveProp<T> = T extends ResponsiveProp<infer X> ? X : T;

export type PickProps<T, K extends keyof T> = {
    [P in K]-?: UnwrapResponsiveProp<T[P]>;
};

export type AxisShorthandPropValues<T> = readonly [] | readonly [T] | readonly [T | undefined, T];

export type AxisShorthandProp<T> = T | AxisShorthandPropValues<T>;

export type AxisShorthandInput<T> = readonly [
    AxisShorthandProp<T | undefined>, // all
    T | undefined, // block
    T | undefined, // inline
];

export type AxisShorthandResolved<T> = readonly [
    Accessor<T | undefined>, // all
    Accessor<T | undefined>, // block
    Accessor<T | undefined>, // inline
];

export type SideShorthand<T> = T | [T] | [T, T] | [T, T, T] | [T, T, T, T];

export type SideShorthandInput<T> = [
    ResponsiveProp<T>, // all
    ResponsiveProp<T>, // block
    ResponsiveProp<T>, // blockStart
    ResponsiveProp<T>, // blockEnd
    ResponsiveProp<T>, // inline
    ResponsiveProp<T>, // inlineStart
    ResponsiveProp<T>, // inlineEnd
];

export type SideShorthandResolved<T> = [
    Accessor<ResponsiveProp<T>>, // blockStart
    Accessor<ResponsiveProp<T>>, // inlineEnd
    Accessor<ResponsiveProp<T>>, // blockEnd
    Accessor<ResponsiveProp<T>>, // inlineStart
];

import type { Accessor, Component, JSX } from 'solid-js';

export type AnyProps = Record<string, unknown>;

export type RenderProp<T> = (props: T) => JSX.Element;

export type MaybeRenderProp<T> = JSX.Element | ((props: T) => JSX.Element);

export type AccessorOrValue<T> = Accessor<T> | T;

export type MaybeAccessorOrValue<T> = Accessor<T | undefined> | T | undefined;

export type PropsWithComponent<P extends Record<string, unknown>, Q extends Partial<P> = P> = Q & {
    component: Component<P>;
};

export type ResponsiveValue<T, B extends string = string> = Partial<Record<B | '_', T>>;

export type ResponsiveProp<T, B extends string = string> = T | ResponsiveValue<T, B>;

type UnwrapResponsiveProp<T> = T extends ResponsiveProp<infer X> ? X : T;

export type PickProps<T, K extends keyof T> = {
    [P in K]-?: UnwrapResponsiveProp<T[P]>;
};

export type AxisShorthandPropValues<T> =
    | readonly []
    | readonly [T | undefined]
    | readonly [T | undefined, T | undefined];

export type AxisShorthandProp<T> = T | AxisShorthandPropValues<T>;

export type AxisShorthandResolved<T> = readonly [
    T | undefined, // all
    T | undefined, // block
    T | undefined, // inline
];

export type AxisShorthandSplit<T> = readonly [
    Accessor<T | undefined>, // all
    Accessor<T | undefined>, // block
    Accessor<T | undefined>, // inline
];

export type SideShorthandPropValues<T> =
    | readonly []
    | readonly [T | undefined]
    | readonly [T | undefined, T | undefined]
    | readonly [T | undefined, T | undefined, T | undefined]
    | readonly [T | undefined, T | undefined, T | undefined, T | undefined]
    | readonly [T | undefined, T | undefined, T | undefined, T | undefined, T | undefined]
    | readonly [
          T | undefined,
          T | undefined,
          T | undefined,
          T | undefined,
          T | undefined,
          T | undefined,
      ]
    | readonly [
          T | undefined,
          T | undefined,
          T | undefined,
          T | undefined,
          T | undefined,
          T | undefined,
          T | undefined,
      ];

export type SideShorthandProp<T> = T | SideShorthandPropValues<T>;

export type SideShorthandResolved<T> = readonly [
    T | undefined, // all
    T | undefined, // block
    T | undefined, // block start
    T | undefined, // block end
    T | undefined, // inline
    T | undefined, // inline start
    T | undefined, // inline end
];

export type SideShorthandSplit<T> = readonly [
    Accessor<T | undefined>, // all
    Accessor<T | undefined>, // block
    Accessor<T | undefined>, // block start
    Accessor<T | undefined>, // block end
    Accessor<T | undefined>, // inline
    Accessor<T | undefined>, // inline start
    Accessor<T | undefined>, // inline end
];

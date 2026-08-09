export type TargetPropsOverrides = Record<string, unknown>;
export type ExamplePropsOverrides = Record<string, TargetPropsOverrides>;
export type PropOverridesStore = Record<number, ExamplePropsOverrides>;

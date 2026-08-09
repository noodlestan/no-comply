import type { ExamplePropsOverrides, TargetPropsOverrides } from '../types';

export type ComponentPlaygroundPropsContextValue = {
	examplePropsOverrides: (example: number) => ExamplePropsOverrides;
	targetPropsOverrides: (example: number, target: string) => TargetPropsOverrides;
	setTargetPropOverride: (example: number, target: string, prop: string, value: unknown) => void;
	hasOverrides: () => boolean;
	hasExampleOverrides: (example: number) => boolean;
	hasTargetOverrides: (example: number, target: string) => boolean;
	resetAllOverrides: () => void;
	resetExampleOverrides: (example: number) => void;
	resetTargetOverrides: (example: number, target: string) => void;
};

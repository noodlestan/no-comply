import type { ComponentEntityData } from '@no-comply/meta';
import type { TSXView } from '@purrtrait/view-tsx';
import type { Accessor, Resource, Setter } from 'solid-js';

import type { ComponentExampleData, ExamplePropsOverrides, TargetPropsOverrides } from '../types';

export type ComponentExamplesContextValue = {
	component: Accessor<ComponentEntityData>;
	exampleList: Resource<ComponentExampleData[]>;
	currentExample: Resource<ComponentExampleData>;
	currentExampleParsed: Resource<TSXView>;
	currentExampleIndex: Resource<number>;
	setCurrentExample: Setter<ComponentExampleData | undefined>;
	currentTargetKey: Accessor<string | undefined>;
	setCurrentTargetKey: Setter<string | undefined>;
	examplePropsOverrides: (example: number) => ExamplePropsOverrides;
	targetPropsOverrides: (example: number, target: string) => TargetPropsOverrides;
	setTargetPropOverride: (example: number, target: string, prop: string, value: unknown) => void;
	resetTargetOverrides: (example: number, target: string) => void;
	resetExampleOverrides: (example: number) => void;
	resetAllOverrides: () => void;
};

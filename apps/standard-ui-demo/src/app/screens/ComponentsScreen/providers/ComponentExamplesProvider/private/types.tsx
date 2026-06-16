import type { ComponentEntityData } from '@no-comply/meta';
import type { CompilerAPI } from '@purrpose/client-babel';
import type { Accessor, Resource, Setter } from 'solid-js';

import type {
	ComponentExampleData,
	ExamplePropsOverrides,
	ParsedExampleAPI,
	TargetPropsOverrides,
} from '../types';

export type ComponentExamplesContextValue = {
	component: ComponentEntityData;
	compiler: CompilerAPI;
	exampleList: Resource<ComponentExampleData[]>;
	primaryExample: Resource<ParsedExampleAPI>;
	currentExample: Resource<ParsedExampleAPI>;
	currentExampleIndex: Accessor<number | undefined>;
	setCurrentExample: Setter<ComponentExampleData | undefined>;
	currentTargetKey: Accessor<string | undefined>;
	setCurrentTargetKey: Setter<string | undefined>;
	examplePropsOverrides: (example: number) => ExamplePropsOverrides;
	targetPropsOverrides: (example: number, target: string) => TargetPropsOverrides;
	setTargetPropOverride: (example: number, target: string, prop: string, value: unknown) => void;
	clearTargetPropOverride: (example: number, target: string, prop: string) => void;
	resetTargetOverrides: (example: number, target: string) => void;
	resetExampleOverrides: (example: number) => void;
	resetAllOverrides: () => void;
};

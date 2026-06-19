import type { ComponentEntityData } from '@no-comply/meta';
import { createChainedResource, createCombinedResource } from '@no-comply/solid-primitives';
import { type Accessor, createEffect, createResource, createSignal, untrack } from 'solid-js';
import { createStore } from 'solid-js/store';

import type {
	ComponentExampleData,
	ExamplePropsOverrides,
	PropOverridesStore,
	TargetPropsOverrides,
} from '../types';

import { parseExample } from './createParseExample';
import { fetchComponentDocsData } from './fetchComponentDocsData';
import type { ComponentExamplesContextValue } from './types';

// WIP signal should be current selected index instead of object
// WIP split in 2 layers : 1) examples+ 2) overrides

export const createComponentExamplesContextValue = (
	componentData: Accessor<ComponentEntityData>,
): ComponentExamplesContextValue => {
	const [selectedExample, setSelectedExample] = createSignal<ComponentExampleData>();
	const [currentTargetKey, setCurrentTargetKey] = createSignal<string | undefined>();
	const [propOverrides, setPropOverrides] = createStore<PropOverridesStore>({});

	const [componentsDocsData] = createResource(() => componentData().name, fetchComponentDocsData);
	const [exampleList] = createChainedResource(componentsDocsData, data => data.examples);
	const [primaryExample] = createChainedResource(componentsDocsData, data => data.preview);
	const [primaryExampleParsed] = createChainedResource(primaryExample, data => parseExample(data));

	const [currentExample] = createChainedResource(
		createCombinedResource([selectedExample, exampleList, primaryExample]),
		([current, list, primary]) => {
			const c = current ?? list?.[0] ?? primary;
			if (!c) {
				throw new Error(`No examples found for ${componentData.name}`);
			}
			return c;
		},
	);

	const [currentExampleIndex] = createChainedResource(currentExample, current => {
		if (current) {
			const index = exampleList()?.indexOf(current);
			if (index !== undefined && index >= 0) {
				return index;
			}
		}
		return 0;
	});

	const [currentExampleParsed] = createChainedResource(currentExample, example => {
		if (!example) {
			throw new Error(`No examples found for ${componentData.name}`);
		}
		return parseExample(example);
	});

	const examplePropsOverrides = (example: number): ExamplePropsOverrides => {
		if (!propOverrides[example]) {
			setPropOverrides(example, {});
		}
		return propOverrides[example] as ExamplePropsOverrides;
	};

	const targetPropsOverrides = (example: number, target: string): TargetPropsOverrides => {
		if (!propOverrides[example]) {
			setPropOverrides(example, {});
		}
		if (!propOverrides[example]?.[target]) {
			setPropOverrides(example, target, {});
		}
		return propOverrides[example]?.[target] as TargetPropsOverrides;
	};

	const setTargetPropOverride = (example: number, target: string, prop: string, value: unknown) => {
		if (!propOverrides[example]) {
			setPropOverrides(example, {});
		}
		if (!propOverrides[example]?.[target]) {
			setPropOverrides(example, target, {});
		}
		setPropOverrides(example, target, prop, value);
	};

	const resetTargetOverrides = (example: number, target: string) => {
		const propNames = Object.keys(propOverrides[example]?.[target] || {});
		for (const name of propNames) {
			setTargetPropOverride(example, target, name, undefined);
		}
	};

	const resetExampleOverrides = (example: number) => {
		const targets = Object.keys(propOverrides[example] || {});
		for (const target of targets) {
			resetTargetOverrides(example, target);
		}
	};

	const resetAllOverrides = () => {
		const examples = Object.keys(propOverrides);
		for (const example of examples) {
			resetExampleOverrides(Number(example));
		}
	};

	createEffect(() => {
		if (componentData()) {
			untrack(() => {
				resetAllOverrides();
				setSelectedExample(undefined);
			});
		}
	}, componentData);

	return {
		component: componentData,
		exampleList,
		primaryExample,
		primaryExampleParsed,
		currentExample,
		currentExampleParsed,
		currentExampleIndex,
		setCurrentExample: setSelectedExample,
		currentTargetKey,
		setCurrentTargetKey,
		examplePropsOverrides,
		targetPropsOverrides,
		setTargetPropOverride,
		resetTargetOverrides,
		resetExampleOverrides,
		resetAllOverrides,
	};
};

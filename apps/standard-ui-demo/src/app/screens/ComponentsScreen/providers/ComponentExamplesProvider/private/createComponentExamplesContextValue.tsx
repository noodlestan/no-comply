import type { ComponentEntityData } from '@no-comply/meta';
import { createResource, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

import type {
	ComponentExampleData,
	ExamplePropsOverrides,
	PropOverridesStore,
	TargetPropsOverrides,
} from '../types';

import { createTSXCompiler } from './createCompiler';
import { createParseExample } from './createParseExample';
import { fetchComponentDocsData } from './fetchComponentDocsData';
import type { ComponentExamplesContextValue } from './types';

export const createComponentExamplesContextValue = (
	component: ComponentEntityData,
): ComponentExamplesContextValue => {
	const [currentExample, setCurrentExample] = createSignal<ComponentExampleData>();
	const [currentTargetKey, setCurrentTargetKey] = createSignal<string | undefined>();
	const [propOverrides, setPropOverrides] = createStore<PropOverridesStore>({});

	const compiler = createTSXCompiler();

	const [componentsDocsData] = createResource(() => component.name, fetchComponentDocsData);

	const [exampleList] = createResource(componentsDocsData, data => data.examples);

	const [primaryExample] = createResource(componentsDocsData, data => {
		const first = data.preview || data.examples?.[0];
		if (!first) {
			throw new Error(`No examples found for ${component.name}`);
		}
		return createParseExample(() => first);
	});

	const [currentExampleDefault] = createResource(
		() => ({
			current: currentExample(),
			list: exampleList(),
		}),
		({ current, list }) => current ?? list?.[0],
	);

	const [currentExampleIndex] = createResource(currentExampleDefault, current => {
		if (current) {
			const index = exampleList()?.indexOf(current);
			if (index !== undefined && index >= 0) {
				return index;
			}
		}
	});

	const [currentExampleParsed] = createResource(currentExampleDefault, example => {
		if (!example) {
			throw new Error(`No examples found for ${component.name}`);
		}
		return createParseExample(() => example);
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
		setPropOverrides(example, '__modified', { __modified: true });
		if (!propOverrides[example]?.[target]) {
			setPropOverrides(example, target, {});
		}
		setPropOverrides(example, target, '__modified', true);
		setPropOverrides(example, target, prop, value);
	};

	const clearTargetPropOverride = (example: number, target: string, prop: string) => {
		setPropOverrides(example, target, prop, undefined);
	};

	const resetTargetOverrides = (example: number, target: string) => {
		setPropOverrides(example, target, {});
	};

	const resetExampleOverrides = (example: number) => {
		setPropOverrides(example, {});
	};

	const resetAllOverrides = () => {
		setPropOverrides({});
	};

	return {
		component,
		compiler,
		exampleList,
		primaryExample,
		currentExample: currentExampleParsed,
		currentExampleIndex,
		setCurrentExample,
		currentTargetKey,
		setCurrentTargetKey,
		examplePropsOverrides,
		targetPropsOverrides,
		setTargetPropOverride,
		clearTargetPropOverride,
		resetTargetOverrides,
		resetExampleOverrides,
		resetAllOverrides,
	};
};

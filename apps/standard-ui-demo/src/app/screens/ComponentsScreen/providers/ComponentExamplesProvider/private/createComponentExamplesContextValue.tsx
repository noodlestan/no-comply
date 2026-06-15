// createComponentExamplesContextValue.ts

import type { ComponentEntityData } from '@no-comply/meta';
import { createResource, createSignal } from 'solid-js';

import type { ExampleData } from '../types';

import { createTSXCompiler } from './createCompiler';
import { createParseExample } from './createParseExample';
import { fetchExamples } from './fetchExamples';
import type { ComponentExamplesContextValue } from './types';

export const createComponentExamplesContextValue = (
	component: ComponentEntityData,
): ComponentExamplesContextValue => {
	const compiler = createTSXCompiler();

	const [exampleList] = createResource(() => component.name, fetchExamples);

	const [currentExample, setCurrentExample] = createSignal<ExampleData>();

	const [primaryExample] = createResource(exampleList, examples => {
		const first = examples?.[0];

		if (!first) {
			throw new Error(`No examples found for ${component.name}`);
		}

		return createParseExample(() => first);
	});

	const [currentExampleParsed] = createResource(
		() => currentExample() ?? exampleList()?.[0],
		example => {
			if (!example) {
				throw new Error(`No examples found for ${component.name}`);
			}

			return createParseExample(() => example);
		},
	);

	return {
		component,
		compiler,
		exampleList,
		primaryExample,
		currentExample: currentExampleParsed,
		setCurrentExample,
	};
};

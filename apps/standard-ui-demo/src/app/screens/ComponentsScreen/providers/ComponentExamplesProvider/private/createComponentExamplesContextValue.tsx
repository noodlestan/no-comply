// createComponentExamplesContextValue.ts

import type { ComponentEntityData } from '@no-comply/meta';
import { createResource, createSignal } from 'solid-js';

import type { ComponentExampleData } from '../types';

import { createTSXCompiler } from './createCompiler';
import { createParseExample } from './createParseExample';
import { fetchComponentDocsData } from './fetchComponentDocsData';
import type { ComponentExamplesContextValue } from './types';

export const createComponentExamplesContextValue = (
	component: ComponentEntityData,
): ComponentExamplesContextValue => {
	const compiler = createTSXCompiler();

	const [componentsDocsData] = createResource(() => component.name, fetchComponentDocsData);

	const exampleList = () => componentsDocsData()?.examples as ComponentExampleData[];

	const [currentExample, setCurrentExample] = createSignal<ComponentExampleData>();

	const [primaryExample] = createResource(componentsDocsData, data => {
		const first = data.preview || data.examples?.[0];

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

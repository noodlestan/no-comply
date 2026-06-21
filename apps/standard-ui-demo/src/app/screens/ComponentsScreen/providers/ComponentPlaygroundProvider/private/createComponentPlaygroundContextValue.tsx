import { createChainedResource, createCombinedResource } from '@no-comply/solid-primitives';
import type { TSXViewTarget } from '@purrtrait/view-tsx';
import { type Resource, createEffect, createSignal, untrack } from 'solid-js';

import type { ComponentExampleData } from '../../ComponentExamplesProvider';
import { parseExample } from '../helpers';

import type { ComponentPlaygroundContextValue } from './types';

export const createComponentPlaygroundContextValue = (
	exampleList: Resource<ComponentExampleData[]>,
	// exampleParam: Accessor<string>,
): ComponentPlaygroundContextValue => {
	const [selectedExample, setSelectedExample] = createSignal<ComponentExampleData>();
	const [selectedTargetKey, setSelectedTarget] = createSignal<string | undefined>();

	const [currentExample] = createChainedResource(
		createCombinedResource([selectedExample, exampleList]),
		([current, list]) => {
			const c = current ?? list?.[0];
			if (!c) {
				throw new Error(`No examples found.`);
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
			throw new Error(`No examples found`);
		}
		return parseExample(example);
	});

	const [exampleTargets] = createChainedResource(currentExampleParsed, parsed => parsed.targets);

	const [currentTargetKey] = createChainedResource(
		createCombinedResource([selectedTargetKey, exampleTargets]),
		([targetKey, targets]) => {
			if (!targets) {
				throw new Error(`Targets not yet initialized`);
			}
			const keys = Object.keys(targets);
			if (!keys.length) {
				throw new Error(`No targets found`);
			}
			return targetKey ?? (keys[0] as string);
		},
	);

	const [currentTarget] = createChainedResource(
		createCombinedResource([exampleTargets, currentTargetKey]),
		([targets, currentKey]) => targets[currentKey] as TSXViewTarget,
	);

	const setCurrentTargetKey = (t: string | undefined) => {
		setSelectedTarget(t);
	};

	createEffect(() => {
		if (selectedExample()) {
			untrack(() => {
				setCurrentTargetKey(undefined);
			});
		}
	});

	createEffect(() => {
		if (exampleList()) {
			untrack(() => {
				setSelectedExample(undefined);
			});
		}
	});

	return {
		exampleList,
		currentExample,
		currentExampleParsed,
		currentExampleIndex,
		currentExampleTargets: exampleTargets,
		setCurrentExample: setSelectedExample,
		currentTarget,
		currentTargetKey,
		setCurrentTargetKey,
	};
};

import type { ComponentEntityData } from '@no-comply/meta';
import { type Accessor, createEffect, untrack } from 'solid-js';
import { createStore } from 'solid-js/store';

import type { ExamplePropsOverrides, PropOverridesStore, TargetPropsOverrides } from '../types';

import type { ComponentPlaygroundPropsContextValue } from './types';

export const createComponentPlaygroundPropsContextValue = (
	componentData: Accessor<ComponentEntityData>,
): ComponentPlaygroundPropsContextValue => {
	const [propOverrides, setPropOverrides] = createStore<PropOverridesStore>({});

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

	const hasTargetOverrides = (example: number, target: string): boolean => {
		return Object.keys(propOverrides[example]?.[target] || {}).length > 0;
	};

	const hasExampleOverrides = (example: number): boolean => {
		for (const target of Object.keys(propOverrides[example] || {})) {
			if (hasTargetOverrides(example, target)) {
				return true;
			}
		}

		return false;
	};

	const hasOverrides = (): boolean => {
		for (const example of Object.keys(propOverrides)) {
			if (hasExampleOverrides(Number(example))) {
				return true;
			}
		}

		return false;
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
			});
		}
	}, componentData);

	return {
		examplePropsOverrides,
		targetPropsOverrides,
		setTargetPropOverride,
		hasOverrides,
		hasExampleOverrides,
		hasTargetOverrides,
		resetAllOverrides,
		resetExampleOverrides,
		resetTargetOverrides,
	};
};

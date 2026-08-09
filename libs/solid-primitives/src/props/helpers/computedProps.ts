import { $PROXY } from 'solid-js';

import { $COMPUTED } from './private';

export type ComputedProps<T extends Record<string, () => unknown>> = {
	[K in keyof T]: ReturnType<T[K]>;
};

export function computedProps<T extends Record<string, () => unknown>>(
	getters: T,
): ComputedProps<T>;

export function computedProps<
	U extends Record<string, unknown>,
	T extends Record<string, () => unknown>,
>(baseProps: U, getters: T): U & ComputedProps<T>;

export function computedProps<
	U extends Record<string, unknown>,
	T extends Record<string, () => unknown>,
>(baseOrGetters: U | T, maybeGetters?: T): U & ComputedProps<T> {
	const baseProps = maybeGetters ? (baseOrGetters as U) : ({} as U);
	const getters = maybeGetters ?? (baseOrGetters as T);

	if (maybeGetters && ($COMPUTED in baseProps || $PROXY in baseProps)) {
		console.error(
			`computedProps(): first argument can not be a proxy, when two arguments provided.`,
		);
	}

	const proxy = baseProps as U & ComputedProps<T>;
	const entries = Object.entries(getters);
	const descriptors = entries.map(([key, getter]) => [key, { get: getter, enumerable: true }]);

	Object.defineProperties(proxy, Object.fromEntries(descriptors));
	Object.defineProperty(proxy, $COMPUTED, { value: true, configurable: true, enumerable: false });

	return proxy;
}

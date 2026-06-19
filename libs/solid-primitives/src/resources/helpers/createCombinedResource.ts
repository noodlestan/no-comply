import {
	type Accessor,
	type InitializedResource,
	type Resource,
	createEffect,
	createResource,
} from 'solid-js';

type CombinedSource<T> = Resource<T> | Accessor<T>;

type CombinedSourceValue<T> =
	T extends Resource<infer V> ? V : T extends Accessor<infer V> ? V : never;

// export type ResourceValue<T> = T extends Resource<infer V> ? V : never;

export type CombinedResourceValue<TSources extends readonly CombinedSource<unknown>[]> = {
	[K in keyof TSources]: CombinedSourceValue<TSources[K]>;
};

type CombinedState = undefined | 'rejected' | 'resolved';

export type CombinedResourceOptions = {
	name?: string;
};

function shallowEqualTuple<T extends readonly unknown[]>(a: T, b: T): boolean {
	if (a === b) return true;
	if (a.length !== b.length) return false;

	for (let i = 0; i < a.length; i++) {
		if (!Object.is(a[i], b[i])) return false;
	}

	return true;
}

export function isResource<T>(value: Resource<T> | Accessor<T>): value is Resource<T> {
	return typeof value === 'function' && 'state' in value && 'latest' in value;
}

/**
 * Creates a resource whose value is the tuple of the latest values from
 * multiple resources.
 *
 * The combined resource remains unresolved until all resources are resolved.
 *
 * Resource state is synchronized across all dependencies:
 *
 * - `pending` if any dependency is pending
 * - `refreshing` if any dependency is refreshing
 * - `ready` when all dependencies are ready
 * - `errored` if any dependency is errored
 *
 * The returned resource updates whenever any dependency changes.
 *
 * ```ts
 * const user = createResource(...)
 * const permissions = createResource(...)
 *
 * const combined = createCombinedResource([
 *   user,
 *   permissions,
 * ])
 *
 * combined.latest
 * // [User, Permissions]
 * ```
 *
 * Combined resources are intended to be used as inputs to
 * `createChainedResource()` and other resource composition helpers.
 */

export function createCombinedResource<const TSources extends readonly CombinedSource<unknown>[]>(
	sources: TSources,
	options: CombinedResourceOptions = {},
): InitializedResource<CombinedResourceValue<TSources>> {
	let resolve: (value: CombinedResourceValue<TSources>) => void;
	let reject: (err: unknown) => void;
	let state: CombinedState;
	let latest: CombinedResourceValue<TSources>;

	const resourceReturn = createResource(
		[],
		async () => {
			latest = await new Promise<CombinedResourceValue<TSources>>((_resolve, _reject) => {
				resolve = _resolve;
				reject = _reject;
			});

			return latest;
		},
		options,
	);

	const [resource, { refetch }] = resourceReturn;

	createEffect(() => {
		const resources = sources.filter(isResource);
		const withErrors = resources.filter(r => r.state === 'errored');

		if (withErrors.length > 0) {
			if (state !== 'rejected') {
				state = 'rejected';
				refetch();
			}
			reject(withErrors[0]?.error);
			return;
		}

		const allResourcesReady = resources.every(r => r.state === 'ready');
		if (!allResourcesReady) {
			if (state) {
				state = undefined;
				refetch();
			}
			return;
		}

		const current = sources.map(r =>
			isResource(r) ? r.latest : r(),
		) as CombinedResourceValue<TSources>;
		if (state && !shallowEqualTuple(current, latest)) {
			refetch();
		}

		state = 'resolved';
		resolve(current);
	});

	return resource as InitializedResource<CombinedResourceValue<TSources>>;
}

import {
	type InitializedResourceReturn,
	type NoInfer,
	type Resource,
	type ResourceFetcher,
	type ResourceFetcherInfo,
	type ResourceOptions,
	createEffect,
	createResource,
} from 'solid-js';

type ChainedState = undefined | 'rejected' | 'resolved';

export function createChainedResource<TParent, T, R = unknown, I = T>(
	parent: Resource<TParent>,
	fetcher: (parentValue: TParent, info: ResourceFetcherInfo<T | I, R>) => T | Promise<T>,
	options: ResourceOptions<T | I, TParent> & {
		initialValue: I;
	},
): InitializedResourceReturn<T | I, R>;

export function createChainedResource<TParent, T, R = unknown>(
	parent: Resource<TParent>,
	fetcher: ResourceFetcher<TParent, T, R>,
	options?: ResourceOptions<NoInfer<T>, TParent>,
): InitializedResourceReturn<T, R>;

export function createChainedResource(
	parent: Resource<unknown>,
	fetcher: ResourceFetcher<unknown, unknown, unknown>,
	options?: ResourceOptions<unknown, unknown>,
): InitializedResourceReturn<unknown, unknown> {
	let resolve: (value: unknown) => void;
	let reject: (err: unknown) => void;
	let latest: unknown;
	let state: ChainedState;

	const resourceReturn = createResource(
		[],
		async (_, info) => {
			latest = await new Promise<unknown>((_resolve, _reject) => {
				resolve = _resolve;
				reject = _reject;
			});

			return fetcher(latest, info);
		},
		options,
	);

	const [, { refetch }] = resourceReturn;

	createEffect(() => {
		// console.log(`CHAINED ${options?.name}`, parent.state, '?', state, '=', latest);
		if (parent.state === 'errored') {
			if (state !== 'rejected') {
				state = 'rejected';
				refetch();
			}
			reject(parent.error);
			return;
		}

		if (parent.state !== 'ready') {
			if (state) {
				state = undefined;
				refetch();
			}
			return;
		}

		if (state && parent.latest !== latest) {
			refetch();
		}

		state = 'resolved';
		resolve(parent.latest);
	});

	return resourceReturn as InitializedResourceReturn<unknown, unknown>;
}

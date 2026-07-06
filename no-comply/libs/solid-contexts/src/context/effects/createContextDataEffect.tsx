import { type Accessor, createEffect, onCleanup } from 'solid-js';

import type { BaseContext } from '../types';

import { mergeContextData, updateElementData } from './private';

export const createContextDataEffect = (
	contexts: Accessor<BaseContext[]>,
	contextElement?: HTMLElement,
): void => {
	let previous: ReturnType<typeof updateElementData> = [];

	createEffect(() => {
		const data = mergeContextData(contexts());
		previous = updateElementData(contextElement, data, previous);
	});

	onCleanup(() => {
		updateElementData(contextElement, {}, previous);
	});
};

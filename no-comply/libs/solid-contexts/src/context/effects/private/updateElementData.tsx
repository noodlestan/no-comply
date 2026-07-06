import {
	type DataAttributeName,
	type RawDataAttributes,
	resolveDataName,
} from '@no-comply/solid-primitives';

type ElementPreviousData = [DataAttributeName, string][];

export const updateElementData = (
	targetElement?: HTMLElement,
	data: RawDataAttributes = {},
	previousData?: ElementPreviousData,
): ElementPreviousData => {
	console.info('updateElementData()');

	if (!targetElement) {
		return [];
	}

	if (previousData) {
		previousData.forEach(([key]) => {
			if (!(key in data)) {
				targetElement.removeAttribute(key);
			}
		});
	}

	return Object.entries(data).map(([key, value]) => {
		const k = resolveDataName(key);
		const v = value !== undefined ? String(value) : '';
		targetElement.setAttribute(k, v);
		return [k, v];
	});
};

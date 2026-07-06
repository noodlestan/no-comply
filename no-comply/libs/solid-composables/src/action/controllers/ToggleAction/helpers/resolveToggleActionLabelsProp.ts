import type { ToggleActionLabelsMap, ToggleActionLabelsProp } from '../types';

export function resolveToggleActionLabelsProp(
	defaultValue: ToggleActionLabelsMap,
	value?: ToggleActionLabelsProp,
): ToggleActionLabelsProp {
	if (value) {
		if (typeof value === 'object') {
			return Object.assign({}, defaultValue, value);
		}
		return value;
	}
	return defaultValue;
}

import type { ContextDataAPI } from '../types';

export const isContextDataAPI = (value: unknown): value is ContextDataAPI => {
	return (
		typeof value === 'object' &&
		value !== null &&
		'contextData' in value &&
		typeof value.contextData === 'function'
	);
};

import type { ContextVarsAPI } from '../types';

export const isContextVarsAPI = (value: unknown): value is ContextVarsAPI => {
	return (
		typeof value === 'object' &&
		value !== null &&
		'contextVars' in value &&
		typeof value.contextVars === 'function'
	);
};

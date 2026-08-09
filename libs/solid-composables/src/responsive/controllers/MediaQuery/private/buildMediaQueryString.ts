import type { MediaQueryCriteria } from '../../../types';

export const mediaQuerCriteriaToString = (value: number | [number, string]): string => {
	if (typeof value === 'number') {
		return `${value}px`;
	}
	return value.join('');
};

export const buildMediaQueryString = (options: MediaQueryCriteria): string => {
	const parts: string[] = [];

	if (options.minWidth) {
		const value = mediaQuerCriteriaToString(options.minWidth);
		parts.push(`(min-width: ${value}`);
	}
	if (options.maxWidth) {
		const value = mediaQuerCriteriaToString(options.maxWidth);
		parts.push(`(max-width: ${value}`);
	}
	if (options.minHeight) {
		const value = mediaQuerCriteriaToString(options.minHeight);
		parts.push(`(min-height: ${value}`);
	}
	if (options.maxHeight) {
		const value = mediaQuerCriteriaToString(options.maxHeight);
		parts.push(`(max-height: ${value}`);
	}

	if (parts.length === 0) {
		throw new Error('Invalid MediaQueryOptions: must define at least one constraint.');
	}

	return parts.join(' and ');
};

import type { ContentLengthProp } from '../types';

const MAPPED = ['short', 'medium', 'long', 'full'];

export const makeLength = (length: ContentLengthProp): string => {
	if (typeof length === 'number') {
		return `${length * 0.63 + 0.5}em`;
	}
	if (MAPPED.includes(length)) {
		return `var(--__content-length-${length})`;
	}
	return length;
};

import type { TextInputLength } from '../types';

export const makeLength = (length: number | TextInputLength, maxLength?: number): string => {
	if (typeof length === 'number') {
		return `${length}em`;
	}
	if (length === 'auto' && maxLength) {
		return `${maxLength * 0.63 + 0.5}em`;
	}
	if (length === 'full') {
		return '100%';
	}
	return `var(--input-length-${length})`;
};

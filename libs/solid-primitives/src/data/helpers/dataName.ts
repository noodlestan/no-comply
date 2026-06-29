import type { DataAttributeName } from '../types';

export const dataName = <T extends string>(key: T): DataAttributeName<T> => {
	return `data-${key}`;
};

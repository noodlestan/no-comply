import type { DataAttributeName } from '../types';

export const resolveDataName = <T extends string>(key: T): DataAttributeName<T> => {
	return `data-${key}`;
};

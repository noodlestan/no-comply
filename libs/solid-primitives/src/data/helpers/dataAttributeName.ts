import type { DataAttributeName } from '../types';

export const dataAttributeName = <T extends string>(key: T): DataAttributeName<T> => {
	return `data-${key}`;
};

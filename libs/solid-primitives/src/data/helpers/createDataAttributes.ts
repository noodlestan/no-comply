import type { Accessor } from 'solid-js';

import type { DataAttributes, RawDataAttributes } from '../types';

import { dataName } from './dataName';

export const createDataAttributes = <T extends string>(
	dataAttributes: Accessor<RawDataAttributes<T>>,
): Accessor<DataAttributes<T>> => {
	return () => {
		const input = dataAttributes();
		const res: DataAttributes<T> = {} as DataAttributes<T>;
		for (const key in input) {
			const value = input[key];
			if (typeof value === 'boolean' && value) {
				res[dataName(key)] = '';
			} else if (typeof value !== 'boolean') {
				res[dataName(key)] = value as T;
			}
		}
		return res;
	};
};

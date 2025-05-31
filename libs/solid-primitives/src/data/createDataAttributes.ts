import type { Accessor } from 'solid-js';

import { dataAttributeName } from './dataAttributeName';
import type { DataAttributes, RawDataAttributes } from './types';

export const createDataAttributes = <T extends string>(
    dataAttributes: Accessor<RawDataAttributes<T>>,
): Accessor<DataAttributes<T>> => {
    return () => {
        const input = dataAttributes();
        const res: DataAttributes<T> = {} as DataAttributes<T>;
        for (const key in input) {
            const value = input[key];
            if (typeof value === 'boolean' && value) {
                res[dataAttributeName(key)] = '';
            } else if (typeof value !== 'boolean') {
                res[dataAttributeName(key)] = value as T;
            }
        }
        return res;
    };
};

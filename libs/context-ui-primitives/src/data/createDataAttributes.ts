import type { Accessor } from 'solid-js';

import type { AccessorOrValue } from '../props';

import { dataAttributeName } from './dataAttributeName';
import type { DataAttributes, RawDataAttributes, RawDataAttributesInput } from './types';

const mergeDataAttributes = <T extends string>(
    dataAttributes: RawDataAttributes<T>,
    res: DataAttributes<T>,
): DataAttributes<T> => {
    for (const key in dataAttributes) {
        const value = dataAttributes[key];
        if (typeof value === 'boolean' && value) {
            res[dataAttributeName(key)] = '';
        } else if (typeof value !== 'boolean') {
            res[dataAttributeName(key)] = value as T;
        }
    }
    return res;
};

export const createDataAttributes = <T extends string>(
    dataAttributesInput: AccessorOrValue<RawDataAttributesInput<T>>,
): Accessor<DataAttributes<T>> => {
    return () => {
        const input =
            typeof dataAttributesInput === 'function' ? dataAttributesInput() : dataAttributesInput;

        if (typeof input === 'string') {
            return { [dataAttributeName(input)]: '' } as DataAttributes<T>;
        }

        if (!Array.isArray(input)) {
            return mergeDataAttributes(input ?? {}, {} as DataAttributes<T>);
        }

        const res: DataAttributes<T> = {} as DataAttributes<T>;
        for (const item of input) {
            if (typeof item === 'string') {
                res[dataAttributeName(item as T)] = '';
            } else {
                mergeDataAttributes(item, res);
            }
        }
        return res;
    };
};

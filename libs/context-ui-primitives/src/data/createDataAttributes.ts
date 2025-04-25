import type { Accessor } from 'solid-js';

import type { AccessorOrValue } from '../props';

import type { DataAttributes, RawDataAttributes, RawDataAttributesInput } from './types';

const prefixDataKey = <T extends string>(key: T): `data-${T}` => `data-${key}`;

const mergeDataAttributes = <T extends string>(
    dataAttributes: RawDataAttributes<T>,
    res: DataAttributes<T>,
): DataAttributes<T> => {
    for (const key in dataAttributes) {
        const value = dataAttributes[key];
        if (typeof value === 'boolean' && value) {
            res[prefixDataKey(key)] = '';
        } else if (typeof value !== 'boolean') {
            res[prefixDataKey(key)] = value as T;
        }
    }
    return res;
};

export const createDataAttributes = <T extends string>(
    dataAttributesInput: AccessorOrValue<RawDataAttributesInput<T>>,
    mappedDataAttributes?: Accessor<DataAttributes<T> | undefined>,
): Accessor<DataAttributes<T>> => {
    return () => {
        const input =
            typeof dataAttributesInput === 'function' ? dataAttributesInput() : dataAttributesInput;
        const mappedValues = mappedDataAttributes?.() ?? {};

        if (typeof input === 'string') {
            return { [prefixDataKey(input)]: '', ...mappedValues } as DataAttributes<T>;
        }

        if (!Array.isArray(input)) {
            return mergeDataAttributes(input ?? {}, { ...mappedValues } as DataAttributes<T>);
        }

        const res: DataAttributes<T> = { ...mappedValues } as DataAttributes<T>;
        for (const item of input) {
            if (typeof item === 'string') {
                res[prefixDataKey(item as T)] = '';
            } else {
                mergeDataAttributes(item, res);
            }
        }
        return res;
    };
};

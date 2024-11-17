import { NumberInputLength } from '../types';

import { makeLength } from './makeLength';

export const makeStyle = (
    length?: NumberInputLength | number,
    maxLength?: number,
): Record<string, string> => {
    return length ? { '--input-length': makeLength(length, maxLength) } : {};
};

import type { Styles } from '../../../../dom';
import type { NumberInputLength } from '../types';

import { makeLength } from './makeLength';

export const makeStyle = (length?: NumberInputLength | number, maxLength?: number): Styles => {
    return length ? { '--input-length': makeLength(length, maxLength) } : {};
};

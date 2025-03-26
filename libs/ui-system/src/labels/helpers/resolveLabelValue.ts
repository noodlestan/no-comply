import type { LabelValue } from '../types';

export const resolveLabelValue = <A extends unknown[]>(
    label: LabelValue<A>,
    ...args: A
): string => {
    return typeof label === 'function' ? label(...args) : label;
};

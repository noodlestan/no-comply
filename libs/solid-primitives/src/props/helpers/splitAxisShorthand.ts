import type { Accessor } from 'solid-js';

import type { AxisShorthandResolved, AxisShorthandSplit } from '../types';

export function splitAxisShorthand<T>(
    input: Accessor<AxisShorthandResolved<T>>,
): AxisShorthandSplit<T> {
    return [() => input()[0], () => input()[1], () => input()[2]];
}

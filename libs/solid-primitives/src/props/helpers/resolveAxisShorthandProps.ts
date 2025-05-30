import type { Accessor } from 'solid-js';

import type { AxisShorthandInput, AxisShorthandPropValues, AxisShorthandResolved } from '../types';

export function resolveAxisShorthandProps<T>(
    input: Accessor<AxisShorthandInput<T>>,
): AxisShorthandResolved<T> {
    const normalized = () => {
        const [all, block, inline] = input();

        if (Array.isArray(all)) {
            const [rowGap, columnGap] = all as AxisShorthandPropValues<T>;

            return [undefined, rowGap, columnGap] as const;
        }

        return [all as T | undefined, block, inline] as const;
    };

    return [() => normalized()[0], () => normalized()[1], () => normalized()[2]] as const;
}

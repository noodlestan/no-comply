import type { Accessor } from 'solid-js';

import type { SideShorthandResolved, SideShorthandSplit } from '../types';

export function splitSideShorthand<T>(
    input: Accessor<SideShorthandResolved<T>>,
): SideShorthandSplit<T> {
    const normalized = () => {
        const [all, ...rest] = input();

        if (Array.isArray(all)) {
            return [undefined, ...all] as const;
        }

        return [all as T | undefined, ...rest] as const;
    };

    return [
        () => normalized()[0],
        () => normalized()[1],
        () => normalized()[2],
        () => normalized()[3],
        () => normalized()[4],
        () => normalized()[5],
        () => normalized()[6],
    ] as const;
}

import type { RawDataAttributes } from '@no-comply/solid-primitives';

import type { ContextVariant } from '../types';

export const reduceContextVariantData = <T extends ContextVariant>(
    resolved: T[],
    extractData: (node: T) => RawDataAttributes | undefined,
    staticData: RawDataAttributes = {},
): RawDataAttributes => {
    return resolved.reduce(
        (acc, node) => ({
            ...acc,
            ...extractData(node),
        }),
        staticData,
    );
};

import type { RawDataAttributes } from '@noodlestan/context-ui-types';

import type { ContextValue } from '../../context/private';

export const reduceContextsData = <T extends ContextValue>(
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

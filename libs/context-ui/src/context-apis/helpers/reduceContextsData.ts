import type { ContextValue } from '../../context/private';
import type { RawDataAttributes } from '../../dom';

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

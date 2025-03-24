import type { ContextValue } from '../../context/private';
import type { Styles } from '../../dom';

export const reduceContextVars = <T extends ContextValue>(
    resolved: T[],
    extractVars: (node: T) => Styles | undefined,
): Styles => {
    return resolved.reduce((acc, node) => ({ ...acc, ...extractVars(node) }), {});
};
